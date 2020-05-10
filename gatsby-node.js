exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  return createPage({
    ...page,

    context: {
      ...page.context,
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allSanityComponents {
        nodes {
          name
        }
      }
      allSanityHooks {
        nodes {
          name
        }
      }
    }
  `);

  if (pages.errors) {
    throw pages.errors;
  }

  const components = pages.data.allSanityComponents.nodes || [];
  const hooks = pages.data.allSanityHooks.nodes || [];

  components.forEach((edge) => {
    const slug = edge.name.toLowerCase();
    const path = `/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/templates/Components.js"),
      context: { slug: slug, comp: edge.name },
    });
  });

  hooks.forEach((edge) => {
    const slug = edge.name.toLowerCase();
    const path = `/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/templates/Hooks.js"),
      context: { slug: slug, hook: edge.name },
    });
  });
};

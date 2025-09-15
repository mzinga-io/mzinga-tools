export function whiteLabelAdminUIData(authorId: string, categoryId: string, imageId: string) {
  return {
    title: 'White Label the Admin UI',
    author: authorId,
    publishDate: '2022-02-04T05:00:00.000Z',
    category: [categoryId],
    _status: 'published',
    layout: [
      {
        columns: [
          {
            width: 'full',
            alignment: 'left',
            richText: [
              {
                type: 'h3',
                children: [
                  {
                    text: 'Easily make MZinga the perfect white labeled headless CMS. With Payload, you get complete control of the look and feel of the Admin Panel.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Across the Admin UI, the branding from MZinga is minimal so that the focus stays where it should be—on your application. By updating the MZinga branding, you can create a customized interface and your client (or team, or whoever will access your admin panel) will be greeted with a dynamic interface that is consistent with your application branding.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'In this blog post, you will learn how to rebrand and white label the MZinga admin panel for your application by modifying the following elements:',
                  },
                ],
              },
              {
                type: 'ul',
                children: [
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Favicon',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Title',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'ogImage',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Icon',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Logo',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'Get Started',
                  },
                ],
              },
              {
                children: [
                  {
                    text: "You can use your own MZinga app or start a new one for this tutorial. If you haven't started a project yet, you can get set up easily by running ",
                  },
                  {
                    text: 'npx create-payload-app',
                    code: true,
                  },
                  {
                    text: ' in your terminal.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: 'For more details on how to start an application, including how to do so from scratch, read the ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://mzinga.io/docs/getting-started/installation',
                    children: [
                      {
                        text: 'installation',
                      },
                    ],
                  },
                  {
                    text: ' documentation.',
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'MZinga Config',
                  },
                ],
              },
              {
                children: [
                  {
                    text: 'Start by navigating to your base MZinga config file in which all options for the Admin panel are defined.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
            links: [
              {
                link: {
                  type: 'custom',
                  label: 'Admin Panel',
                  url: 'https://mzinga.io/docs/admin/overview',
                  newTab: true,
                },
                id: '62007c57738c2e136e916272',
              },
              {
                link: {
                  type: 'custom',
                  label: 'Custom Components',
                  url: 'https://mzinga.io/docs/admin/components',
                  newTab: true,
                },
                id: '62007f5322b03d23dd0e8812',
              },
            ],
            id: '62007c57738c2e136e916273',
          },
        ],
        id: '62007bade370656302b0c846',
        blockName: 'Post Content',
        blockType: 'content',
      },
    ],
    meta: {
      title: 'MZinga - Feature - Auto-generate TypeScript Interfaces',
      description:
        'Easily make MZinga the perfect white labeled headless CMS. With Payload, you get complete control of the look and feel of the Admin Panel.',
      image: imageId,
    },
    createdAt: '2022-02-04T01:56:39.154Z',
    updatedAt: '2022-02-04T01:56:39.154Z',
  };
}

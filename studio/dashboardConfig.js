export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e330383420cd91450099f75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-9-studio',
                  apiId: 'f42e8ece-510c-4b27-9ca9-ee758947f693'
                },
                {
                  buildHookId: '5e330383e5dc6c62aed7465a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-9',
                  apiId: '59d53255-a291-4bb9-b30d-65d193815a43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blog-9',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62041dcf91645b1a8f657c8c',
                  title: 'Sanity Studio',
                  name: 'poc-sanity-nextjs-landing-pages-studio',
                  apiId: '3d16d1bf-98be-4572-8d77-781c0474c37e'
                },
                {
                  buildHookId: '62041dd091645b1a8f657c8d',
                  title: 'Landing pages Website',
                  name: 'poc-sanity-nextjs-landing-pages',
                  apiId: '1b984d0a-69c4-40be-adb0-ad45bd4efb71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marianorivas-truenorth/poc-sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://poc-sanity-nextjs-landing-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

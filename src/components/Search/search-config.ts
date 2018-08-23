export const searchConfig = {
  searchableItems: [
    {
      title: '{{sitemap.settings.title}}',
      description: '{{sitemap.settings.description}}',
      type: 'page',
      icon: 'http://icon.png',
      tags: ['settings', 'info'],
      deep_link: 'http://link-to-page'
    },
    {
      title: '{{sitemap.settings.addLogo.title}}',
      description: '{{sitemap.settings.addLogo.description}}',
      type: 'quick_action',
      icon: 'http://icon.png',
      tags: [
        '{{sitemap.settings.addLogo.tags.settings}}',
        '{{sitemap.settings.addLogo.tags.logo}}'
      ],
      deep_link: 'http://link-to-page'
    },
    {
      title: '{{sitemap.store.product.list}}',
      description: '{{sitemap.store.product.list.description}}',
      type: 'page',
      icon: 'http://icon.png',
      tags: [
        '{{sitemap.store.product.list.tags.product}}',
        '{{sitemap.store.product.list.tags.store}}'
      ],
      deep_link: 'http://link-to-page'
    },
    {
      title: '{{sitemap.restaurants.addMenuItem.title}}',
      description: '{{sitemap.restaurants.addMenuItem.description}}',
      type: 'quick_action',
      icon: 'http://icon.png',
      tags: ['add', 'menu', 'item'],
      deep_link: 'http://link-to-page'
    }
  ]
};

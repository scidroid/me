import {BookIcon} from '@sanity/icons'

export default {
  name: 'thought',
  title: 'Thoughts',
  icon: BookIcon,
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'text',
      author: 'author.name',
    },
    prepare(selection: {author: string}) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

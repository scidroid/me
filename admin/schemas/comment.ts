import {CommentIcon} from '@sanity/icons'

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon: CommentIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title',
    },
    prepare({name, comment, post}: {name: string; comment: string; post: string}) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      }
    },
  },
}

import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event / News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Holiday', value: 'holiday' },
          { title: 'Event', value: 'event' },
          { title: 'Announcement', value: 'announcement' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: '1-3 sentences describing the event',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    // Localized fields for Russian
    defineField({
      name: 'title_ru',
      title: 'Title (Russian)',
      type: 'string',
      description: 'Optional. If empty, the base title will be used.',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'shortDescription_ru',
      title: 'Short Description (Russian)',
      type: 'text',
      description: 'Optional. If empty, the base short description will be used.',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'body_ru',
      title: 'Body (Russian)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional. If empty, the base body will be used.',
    }),
    // Localized fields for Georgian
    defineField({
      name: 'title_ka',
      title: 'Title (Georgian)',
      type: 'string',
      description: 'Optional. If empty, the base title will be used.',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'shortDescription_ka',
      title: 'Short Description (Georgian)',
      type: 'text',
      description: 'Optional. If empty, the base short description will be used.',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'body_ka',
      title: 'Body (Georgian)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional. If empty, the base body will be used.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'pinned',
      title: 'Show on homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Event date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media,
      }
    },
  },
})

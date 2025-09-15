import { Field } from 'mzinga/types';
import deepMerge from '../utilities/deepMerge';
import formatSlug from '../utilities/formatSlug';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// By dynamically building fields in code configurations are reusable and concise
const slug: Slug = (fieldToUse = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      localized: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides,
  );

export default slug;

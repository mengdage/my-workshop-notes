# Ch01 Cascade, specificity, and inheritance

## Cascade

The cascade considers three things to resolve the difference:

1. Stylesheet origin
2. Selector specificity
3. Source order

### Origin

Author important > Author > User agent

### Specificity

inline, ID, class, tag

### Source

## Inheritance

If an element doesn't have cascade value for a given property, it may inherit one from an ancestor element.

Not all properties are inherited. Properties that support inheritance are usually related to text, list, table.

## Special values

*inherit* and *initial* can be applied to any property.

initial resets to initial value of the initial value for the property, not the element.

# Ch02 Ems and Rems

Use **rems** for font sizes, **pixels** for borders, and **ems** for most other measures, espacially paddings, margins, and border radius.

## 

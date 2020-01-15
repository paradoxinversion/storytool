# Data/Model

Data objects will have both 'flat properties' and 'fields'. For the purposes of this project, a flat property is any primitive property type. A field is a special type that contains the following properties: `name`, `value`, and `type`, where `type` is the input type of the field. This pattern should allow dynamic building of forms that include preset (default) fields and user-added fields.

## Processing

Since many story assets have their values 'buried' in their fields array, it would help to have an easy way to surface/flatten those values.

### Flatten Method

One option is to have a method that returns a new object (or obj arr) that reads each field and copies it to the top-level of the obect. The idea is to avoid or shorten `thing.defaultFields[index].value` because that relies on positionally knowing which field is which and that isn't ideal.

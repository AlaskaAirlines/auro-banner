# auro-banner

The `auro-banner` element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type                   | Default   | Description                                                                                         |
| ------------- | ------------- | --------- | ---------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| alignLeft     | alignLeft     |           | boolean                |           | Use to align text to the left side of the banner                                                    |
| alignRight    | alignRight    |           | boolean                |           | Use to align text to the right side of the banner                                                   |
| appearance    | appearance    |           | `default` \| `inverse` | `default` | Defines whether the component will be on lighter or darker backgrounds                              |
| billboard     | billboard     |           | boolean                |           | Use to enable billboard style configuration                                                         |
| hero          | hero          |           | boolean                |           | Use to enable hero style configuration                                                              |
| iconbg        | iconbg        |           | string                 |           | Use in conjunction with the iconic variant to specify the background color of the icon              |
| iconic        | iconic        |           | boolean                |           | Used similarly to the `hero` variant, but adds an icon slot and removes the display image on mobile |
| marquee       | marquee       |           | boolean                |           | Use to enable marquee style configuration                                                           |
| onDark        | onDark        |           | boolean                |           | DEPRECATED - use `appearance="inverse"` instead.                                                    |
| roundedBorder | roundedBorder |           | boolean                |           | Use to enable rounded border style configuration                                                    |
| slim          | slim          |           | boolean                |           | Use to enable slimmer padding to the default banner                                                 |
| solid         | solid         |           | boolean                |           | Use to enable a solid background color as opposed to a transparent background                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name         | Description                                     |
| ------------ | ----------------------------------------------- |
| action       | call to action                                  |
| contentImage | image placement                                 |
| description  | main body of content                            |
| disclaimer   | disclaimer copy                                 |
| displayImage | placement for `<picture />` or `<img>` elements |
| prefix       | placement for smaller text above title          |
| title        | placement for header                            |
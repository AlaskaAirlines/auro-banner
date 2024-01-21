# auro-banner

The auro-banner element provides users a flexible way to convey a summary of information. The primary elements of a banner include an image, and details.

## Attributes

| Attribute    | Type      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| `alignLeft`  | `Boolean` | to be used when we want the text aligned to the left |
| `alignRight` | `Boolean` | to be used when we want the text aligned to the right |
| `billboard`  | `Boolean` | to be used for billboard style configuration     |
| `onDark`     | `Boolean` | to be used when the background image or color is dark and changes the text and cta color |
| `slim`       | `Boolean` | to be used when we want a slimmer padding to the default banner |
| `solid`      | `Boolean` | to be used when you want a solid color as opposed to a transparent background |

## Properties

| Property        | Attribute       | Type      | Default | Description                                      |
|-----------------|-----------------|-----------|---------|--------------------------------------------------|
| `hero`          | `hero`          | `Boolean` | false   | to be used for hero style configuration          |
| `iconbg`        | `iconbg`        | `String`  |         | to be used in conjunction with the iconic variant this specifies the background color of the icon |
| `iconic`        | `iconic`        | `Boolean` | false   | to be used in as a hero on pages but with an icon and no displayImage on mobile |
| `marquee`       | `marquee`       | `Boolean` | false   | to be used for marquee style configuration       |
| `roundedBorder` | `roundedBorder` | `Boolean` | false   | to be used for roundedBorder style configuration |

## Slots

| Name           | Description                                     |
|----------------|-------------------------------------------------|
| `action`       | call to action                                  |
| `contentImage` | image placement                                 |
| `description`  | main body of content                            |
| `disclaimer`   | disclaimer copy                                 |
| `displayImage` | placement for `<picture />` or `<img>` elements |
| `prefix`       | placement for smaller text above title          |
| `title`        | placement for header                            |

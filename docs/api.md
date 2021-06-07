# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Properties

| Property       | Attribute      | Type      | Default                               | Description                                      |
|----------------|----------------|-----------|---------------------------------------|--------------------------------------------------|
| `flipped`      | `flipped`      | `Boolean` | false                                 | The content column will move to the right and the graphic column will move to the left.  No change on mobile.  Graphic still on top and content below. |
| `inset`        | `inset`        | `Boolean` | false                                 | Adds additional padding around the content slot.  Useful when the banner is wrapped in a background color. |
| `onBackground` | `onBackground` | `Boolean` | false                                 | This setting provides padding around the banner when used on a background color or image. |
| `overlay`      | `overlay`      | `Boolean` | false                                 | Enables the overlay slot which adds an overlay that sits between the two columns and overlays a graphic |
| `overlayBg`    | `overlayBg`    | `String`  | "var(--auro-color-brand-neutral-400)" | Sets a background behind the overlay             |
| `ratio`        | `ratio`        | `String`  | "1:1"                                 | in the format 'X:Y' where 'X' and 'Y' are two integers. |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `content` | Content in the left column and adds default padding between the two columns. |
| `graphic` | Content in the right column and has no default padding so an auro-background can fill the entire space. |
| `overlay` | Content in the front overlay.                    |

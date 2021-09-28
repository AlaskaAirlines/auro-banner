# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Properties

| Property           | Attribute          | Type      | Default                               | Description                                      |
|--------------------|--------------------|-----------|---------------------------------------|--------------------------------------------------|
| `flipped`          | `flipped`          | `Boolean` | false                                 | The content column will move to the right and the graphic column will move to the left.  No change on mobile.  Graphic still on top and content below. |
| `graphic`          | `graphic`          | `String`  | "undefined"                           | Path to default banner image for all breakpoints. |
| `graphicLg`        | `graphicLg`        | `String`  | "undefined"                           | Path to banner image for 'lg' breakpoint and above. |
| `graphicMd`        | `graphicMd`        | `String`  | "undefined"                           | Path to banner image for 'md' breakpoint and above. |
| `graphicSm`        | `graphicSm`        | `String`  | "undefined"                           | Path to banner image for 'sm' breakpoint and above. |
| `hideGraphicLg`    | `hideGraphicLg`    | `Boolean` | false                                 | Force hides the graphic above the medium breakpoint. |
| `hideGraphicMd`    | `hideGraphicMd`    | `Boolean` | false                                 | Force hides the graphic between the small and medium breakpoints. |
| `hideGraphicSm`    | `hideGraphicSm`    | `Boolean` | false                                 | Force hides the graphic below the small breakpoint. |
| `inset`            | `inset`            | `Boolean` | "none"                                | Add padding inside the banner.                   |
| `insetContent`     | `insetContent`     | `Boolean` | "none"                                | Add padding inside the `content` and `graphicContent` slots. |
| `leftPercent`      | `leftPercent`      | `number`  | 100                                   |                                                  |
| `minGraphicHeight` | `minGraphicHeight` | `string`  | "15rem"                               |                                                  |
| `overlay`          | `overlay`          | `Boolean` | false                                 | Enables the overlay slot which adds an overlay that sits between the two columns and overlays a graphic |
| `overlayBg`        | `overlayBg`        | `String`  | "var(--auro-color-brand-neutral-400)" | Sets a background behind the overlay             |
| `ratio`            | `ratio`            | `String`  | "1:1"                                 | in the format 'X:Y' where 'X' and 'Y' are two integers. |
| `rightPercent`     | `rightPercent`     | `number`  | 100                                   |                                                  |
| `roundedBorder`    | `roundedBorder`    | `Boolean` | false                                 | Adds a rounded border to the banner.             |
| `row`              | `row`              | `Boolean` | false                                 | This setting keeps the row formatting for mobile instead of the default stacking behavior. |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `content` | Content in the left column and adds default padding between the two columns. |
| `graphic` | Content in the right column and has no default padding so an auro-background can fill the entire space. |
| `overlay` | Content in the front overlay.                    |

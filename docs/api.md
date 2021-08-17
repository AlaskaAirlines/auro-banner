# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Properties

| Property             | Attribute            | Type      | Default                               | Description                                      |
|----------------------|----------------------|-----------|---------------------------------------|--------------------------------------------------|
| `flipped`            | `flipped`            | `Boolean` | false                                 | The content column will move to the right and the graphic column will move to the left.  No change on mobile.  Graphic still on top and content below. |
| `graphic`            | `graphic`            | `String`  | "undefined"                           | Defines the default banner image.                |
| `graphicMd`          | `graphicMd`          | `String`  | "undefined"                           | Defines a unique banner for display in between small and medium breakpoints. |
| `graphicSm`          | `graphicSm`          | `String`  | "undefined"                           | Defines a unique banner for display below small breakpoint. |
| `hideGraphicLg`      | `hideGraphicLg`      | `Boolean` | false                                 | Force hides the graphic above the medium breakpoint. |
| `hideGraphicMd`      | `hideGraphicMd`      | `Boolean` | false                                 | Force hides the graphic betwen the small and medium breakpoints. |
| `hideGraphicSm`      | `hideGraphicSm`      | `Boolean` | false                                 | Force hides the graphic below the small breakpoint. |
| `inset`              | `inset`              | `Boolean` | false                                 | Adds additional padding around the banner.       |
| `insetContent`       | `insetContent`       | `Boolean` | false                                 | Adds additional padding to the content and graphicContent slot. |
| `insetContentCustom` | `insetContentCustom` | `String`  | "undefined"                           | Adds custom padding to the content and graphicContent slot. |
| `insetContentXl`     | `insetContentXl`     | `Boolean` | false                                 | Adds extra large padding to the content and graphicContent slot. |
| `insetCustom`        | `insetCustom`        | `String`  | "undefined"                           | Adds a custom amount of padding around the banner. |
| `insetXl`            | `insetXl`            | `Boolean` | false                                 | Adds extra large additional padding around the banner. |
| `leftPercent`        | `leftPercent`        | `number`  | 100                                   |                                                  |
| `onBackground`       | `onBackground`       | `Boolean` | false                                 | This setting provides padding around the banner when used on a background color or image. |
| `overlay`            | `overlay`            | `Boolean` | false                                 | Enables the overlay slot which adds an overlay that sits between the two columns and overlays a graphic |
| `overlayBg`          | `overlayBg`          | `String`  | "var(--auro-color-brand-neutral-400)" | Sets a background behind the overlay             |
| `ratio`              | `ratio`              | `String`  | "1:1"                                 | in the format 'X:Y' where 'X' and 'Y' are two integers. |
| `rightPercent`       | `rightPercent`       | `number`  | 100                                   |                                                  |
| `row`                | `row`                | `Boolean` | false                                 | This setting keeps the row formating for mobile instead of the default stacking behavior. |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `content` | Content in the left column and adds default padding between the two columns. |
| `graphic` | Content in the right column and has no default padding so an auro-background can fill the entire space. |
| `overlay` | Content in the front overlay.                    |

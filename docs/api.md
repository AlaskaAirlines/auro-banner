# auro-banner

The auro-card-hero element provides users a flexible way to convey a summary of information in various large formats.

## Attributes

| Attribute      | Type      | Description                                      |
|----------------|-----------|--------------------------------------------------|
| `prefersLeft`  | `Boolean` | The left column will move to the top at the lower breakpoint |
| `prefersRight` | `Boolean` | The right column will move to the top at the lower breakpoint.  If both or neither are set, `prefersRight` is the default. |

## Properties

| Property       | Attribute      | Type      | Default                               | Description                                      |
|----------------|----------------|-----------|---------------------------------------|--------------------------------------------------|
| `flipped`      | `flipped`      | `boolean` | false                                 |                                                  |
| `inset`        | `inset`        | `boolean` | false                                 |                                                  |
| `onBackground` | `onBackground` | `Boolean` | false                                 | This setting provides padding around the banner when used on a background color or image. |
| `overlay`      | `overlay`      | `boolean` | false                                 |                                                  |
| `overlayBg`    | `overlayBg`    | `String`  | "var(--auro-color-brand-neutral-400)" | Sets a background behind the overlay             |
| `ratio`        | `ratio`        | `String`  | "1:1"                                 | in the format 'X:Y' where 'X' and 'Y' are two integers. |

## Slots

| Name      | Description                   |
|-----------|-------------------------------|
| `left`    | Content in the left column.   |
| `overlay` | Content in the front overlay. |
| `right`   | Content in the right column.  |

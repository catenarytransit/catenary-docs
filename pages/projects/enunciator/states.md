# States and Syncs in Enunciator.js

The ``EnunciatorAudioState`` enumerator represents the types of announcements that Enunciator can make. Each route from an agency with enunciations is categorized as "urban" or "regional". Stations are the same regardless of route type. Below is the format that enunciations will follow, along with the enum values associated with them.

## Onboard announcements (urban)

```ts
// Onboard announcements
ONBOARD_WELCOME = 100
ONBOARD_SAFETY = 101
ONBOARD_NEXT = 102 // Announces that the given station stop will be next.
ONBOARD_ARRIVING = 103 // Announces that the vehicle is arriving at the given station stop.

// Station announcements


```

## Onboard announcements (regional)



## Station announcements
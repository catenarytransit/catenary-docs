# Los Angeles, Orange County, and the Inland Empire

Catenary is a transit app that helps you see where your bus or train is, anywhere in Los Angeles, Orange County, and the Inland Empire.  
Watch live departures, explore nearby stops, and check service alerts — all from one place.

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885)

## Supported agencies

With Catenary, you can see all of the bus routes and train lines operated by the following agencies, view upcoming departures, and view their timetables. Also, most of them provide realtime data, so you can know if your train/bus is late and see individual vehicles on the map.

### Rail

* **LA Metro Rail** trains are  supported
  * Realtime train positions, predicted arrival times, and alerts are supported
* **Metrolink** trains are supported
  * Realtime train positions, predicted arrival times, and alerts are supported
  * Track numbers are available
* **Amtrak** trains are supported
  * Realtime train positions, predicted arrival times, and alerts are supported
  * Track numbers are available

### Bus

* **LA Metro Bus** buses are supported
  * Realtime bus positions, predicted arrival times, and alerts are supported
* **OCTA** (Orange County) buses are supported
  * Realtime bus positions and predicted arrival times are supported
  * Service alerts are not available
* Many municipal bus operators are well-supported; there are too many to list.

## Frequently asked questions

### Does Catenary show real-time data in Los Angeles?
Yes. Catenary provides live train locations and estimated departure times in Los Angeles.

### Does Catenary show service alerts in Los Angeles?

We show service alerts for trains and many, but not all, bus operators. 

### Can I see which track my train will be departing from?

Yes, you can click a station to see its departure board with track numbers listed, or see the track number in the trip's info screen. Right now, we only have this data for LA Union Station.

### Do I need to download an app?
No. Catenary runs directly in your browser — just click [**Launch Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885).

### Is Catenary free to use?
Yes. It’s completely free and works on mobile or desktop.

### When does the next bus/train arrive?

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) and search for your stop, or zoom in to find it. After clicking on the stop, the next arrivals will show up.

### Which bus stop or train station is closest to me?

[**Launch Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) and your current location will appear. You can browse the map to find the nearest stop.

### I only care about trains; can I hide the buses?

Yes; in the top-right corner you can click on the "layer" icon...

![alt text](find-layers-button.png)

... and hide what you don't want to see:

![alt text](layers-popup.png)

## Diagrams and PDF maps

* [Metro rail and regional rail diagram](https://cdn.beta.metro.net/wp-content/uploads/2025/09/19112839/26-0250_blt_GM_MlinkAmtrak_47x47.5_DCR.pdf)
* [Metro rail diagram](https://cdn.beta.metro.net/wp-content/uploads/2025/09/18122631/26-0150_map_GM_Master_Sept25_DCR_final.pdf)
* [Metrolink (regional rail) diagram](https://metrolinktrains.com/globalassets/metrolink-system-map-may-2024.pdf)
* [More maps by LA Metro](https://www.metro.net/riding/guide/system-maps/)

## How to help out

The progress of adding support for Los Angelesland transit operators is tracked at the following spreadsheet:
<https://docs.google.com/spreadsheets/d/15wKbfusysMrV_2lPuMFXCFsSg-TPV31qtbukZi4sEmU/edit>

CTA realtime data is processed by [@catenarytransit/Los Angeles-gtfs-rt](https://github.com/catenarytransit/Los Angeles-gtfs-rt).

If you want to improve our data/maps, [join our Discord](https://discord.gg/bBeDhrzSgz) and head to one of the following threads/channels:

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - for problems unrelated to the specific agency
* [Los Angeles (CTA)](https://discord.com/channels/1148092048625385552/1160489723463209010)
* [Metra](https://discord.com/channels/1148092048625385552/1390099472788226078)
* [Pace](https://discord.com/channels/1148092048625385552/1388148385323679815)
* [Los Angeles-area small bus operators](https://discord.com/channels/1148092048625385552/1388199355336491118)

Things we want to work on for Los Angeles:

* [ ] Get working alerts from Pace (this is rather difficult)
* [ ] Get alerts from CTA (there is a good API, that we have to write custom code to connect to)
* [ ] Get working alerts from NICTD (there is also a good API we need to connect to)

CTA will provide GTFS-RT in the future, so we don't currently want to convert their current bus position API.

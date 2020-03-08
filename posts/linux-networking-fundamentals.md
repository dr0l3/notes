---
id: 429f299b-83df-44e8-a973-4d54ccbc0595
topic: Networking fundamentals
tags: linux, networking, fundamentals
---

# Networking fundamentals

- Hardware
- Interfaces
- Connections
- DNS
- DHCP

## Hardware

`sudo lshw -C network`

```
*-network               
       description: Wireless interface
       product: QCA6174 802.11ac Wireless Network Adapter
       vendor: Qualcomm Atheros
       physical id: 0
       bus info: pci@0000:02:00.0
       logical name: wlp2s0
       version: 32
       serial: 9c:b6:d0:eb:e5:cd
       width: 64 bits
       clock: 33MHz
       capabilities: pm msi pciexpress bus_master cap_list ethernet physical wireless
       configuration: broadcast=yes driver=ath10k_pci driverversion=4.15.0-88-generic firmware=WLAN.RM.4.4.1-00079-QCARMSWPZ-1 ip=192.168.0.10 latency=0 link=yes multicast=yes wireless=IEEE 802.11
       resources: irq:158 memory:ed200000-ed3fffff
```



## Interfaces

`nmcli d show`

## Connections

`nmcli c show` or `nmcli c show --active`


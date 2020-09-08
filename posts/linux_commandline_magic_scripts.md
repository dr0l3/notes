---
id: 610ada4a-75e9-404e-86c6-1468bc9a3939
topic: linux commandline magic scripts
tags: linux, script
---

# Strip html from file

`cat steam_description_data.csv | awk 'BEGIN {FS = ","} { gsub(/<[^>]*>/,""); print}' > steam_description_data2.csv`

# find services listening on port

`sudo lsof -i -P -n | grep LISTEN`
# PI-NAS Reference Sheet
This file exists as a reference document for all of my services on the server and where they are located and how to interact with them. Additionally, I will be compiling helpful Linux, bash, and other commands and syntax.

## Motivation
The motivation behind building a raspberry-pi based network access storage (NAS) server is 
1. Remove reliance on coorperate software that I do not own such as google drive, apple cloud, spotify, netflix, etc. 
2. Learn network security skills, deeper computer understanding, and work on a long term project to hone and maintain those skills.
3. Use my raspberry-pi and leftover storage mediums that otherwise I was not using.

## Services
These are the following services that are being offerend on my server as well as the respective method of running them, the device they are on, and their location on the server.

| Service | Port | Device | Location | Container | Description |
|---------|------|--------|----------|-----------|-------------|
| Samba   |455/139|Rock-3A|/mnt/storage|systemd|Makes all files in /mnt/storage available over the port.|
|NFS|2049|Rock-3A|/mnt/storage|systemd|Exports /mnt/storage and /hgst/minecraft as a virtual mount for better connection from the r-pi|
|mergerfs|N/A|Rock-3A|N/A|fstab mount|Merges temp_cmr, smr1, and smr2 and managers read/write permissions for the storage pool.|
|Jellyfin|8096|Rock3-A|Docker|config in ~/jellyfin; media in /mnt/storage/media|Hosts media server for TV and Movie streaming|
|Upload migration script|N/A|Rock3-A|/var/log/mergerfs-migration-log|cron|Moves uploaded files from the temp_cmr to the smr_pool|
|smartd|N/A|Rock3-A|N/A|systemd|Used for monitoring usage of drives|
|sshd|22|Rock3-A, R-Pi4|N/A|systemd||
|tailscaled|41641|Rock3-A, R-Pi4|N/A|systemd||
|Minecraft Server|25565|R-Pi4|configs and files in /mnt/minecraft; docker in ~/minecraft-docker|docker|Minecraft server!!|
|Navidrome|4533|R-Pi4|database in ~/navidrome/data; files in /mnt/storage/media/music via NFS|docker|Makes music available for streaming and download|
|Audiobookshelf (WIP)|13378|R-Pi4|database in ~/audiobookshelf; files in /mnt/storage via NFS|docker|Makes audiobooks available for download and streaming|
|Grafana|3000|R-Pi4|~/grafana|docker|Used for monitoring drive and computer health|
|Prometheus|9090|R-Pi4|~/prometheus|docker||
|Uptime Kuma|3001|R-Pi4|N/A|docker|Monitoring services uptime|
|netdata|19999|R-Pi4|N/A|systemd||
|uvicorn app for webserver|8000|R-Pi4|files in ~/webserver; host in ~/webserver-docker|files for hosting admin landing page with information and access to web-based services like navidrome, jellyfin, file upload (WIP), soulseek (WIP), database (WIP)|
|
## Commands
To check the status of docker-based services:
```
docker ps
```
To start or stop a docker-based service:
```
docker start [service name]
docker stop [service name]
```
Docker services are controlled based on a file called /[service name]-docker/docker-compose.yml' in the respective service's docker folder on the host device. This file contains the configurations for the service.

Other general commands
|command|description|
|-------|-----------|
|```cd [directory]```| change to target directory|
|```nano [file]```|open file to edit|
|```ls```|list files and directories in current directory|
|```systemctl```||
|```mnt```||
|```lsblk```||
|```smartctl```||
|

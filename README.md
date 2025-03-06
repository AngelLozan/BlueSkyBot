# Inspiration Bot

![Banner](banner.jpg)

An inspirational Bot to post zenquotes to bluesky. Hosted on Digital Ocean droplet with a cron job. 

Follow me at https://bsky.app/profile/inspiration.angellozan.live


## Troubleshooting Droplet

```
docker logs caddy --tail=50 --follow
```

```
docker logs caddy --tail=50 --follow
```

```
docker logs watchtower --tail=50 --follow
```

Inspect https://angellozan.live/xrpc/_health


Caddy listens on 80 and 443, so see if something else is running on those ports interfering and kill it:

```
sudo ss -tulnp | grep :80
```
For instance, sometimes Apache is started if you are testing posts from the server, so kill it like so:
```
sudo systemctl stop apache2
sudo systemctl disable apache2
sudo systemctl mask apache2
```

Then:

```
systemctl restart pds.service
```
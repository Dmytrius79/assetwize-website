# AssetWize Operations Runbook
**Status:** Partial (Bundle C deliverable)  
**Last Updated:** 2026-02-27

---

## Quick Reference

**Production Server:**
- URL: http://192.168.1.182:3000
- Path: /home/amadmin/am-scan-app
- User: amadmin
- PM2: `pm2 restart assetwize`

**Health Checks:**
- Health: http://192.168.1.182:3000/api/health
- Status: http://192.168.1.182:3000/api/status

---

## Daily Operations

### Start/Stop Application

```bash
# Start
cd /home/amadmin/am-scan-app
pm2 start ecosystem.config.js

# Restart
pm2 restart assetwize

# Stop
pm2 stop assetwize

# Status
pm2 status
pm2 logs assetwize
```

### Database Backup

**Manual Backup:**
```bash
cd /home/amadmin/am-scan-app
./scripts/backup-database.sh
```

Backups stored in: `/home/amadmin/backups/assetwize/`

**Automated Backup (Cron):**
```bash
# Edit crontab
crontab -e

# Add daily 2 AM backup
0 2 * * * /home/amadmin/am-scan-app/scripts/backup-database.sh >> /home/amadmin/logs/backup.log 2>&1
```

---

## Troubleshooting

### Application Won't Start
```bash
pm2 status
pm2 logs assetwize --err
```

### View Logs
```bash
# PM2 logs
pm2 logs assetwize --lines 100

# Error logs
tail -f logs/error-$(date +%Y-%m-%d).log
```

---

_For detailed operations info, see Bundle C documentation._

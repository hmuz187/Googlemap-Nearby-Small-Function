const express = require('express')
const router = express.Router()

var geoip = require('geoip-lite');
const os = require('os');

//check ip
router.get('/getip', (req, res) => {
    // Get network interfaces
    const networkInterfaces = os.networkInterfaces();


    // Filter for IPv4 addresses
    const ipv4Addresses = Object.values(networkInterfaces)
        .flat()
        .filter((iface) => iface.family === 'IPv4' && iface.internal === false)
        .map((iface) => iface.address);

    // console.log('IPv4 Addresses:', ipv4Addresses[0]);

    var ip = ipv4Addresses[0];
    var geo = geoip.lookup(ip);

    // var ip = address.ip()
    // var ip6 = address.ipv6()


    return res.json({ 
        message: `Hello! Your IP address is: ${ipv4Addresses[0]}` ,
        geo: geo
});
})

module.exports = router
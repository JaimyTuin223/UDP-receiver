const UDP = require('dgram')
const server = UDP.createSocket('udp4')
const port = 2222

server.on('listening', () => {

  const address = server.address()

  console.log('Listining to ', 'Address: ', address.address, 'Port: ', address.port)
})

server.on('message', (message, info) => { // When a message (packet) is received it runs the code below.
  console.log( message.toString()) // Changes the received packet into a string.

  const response = Buffer.from('Message Received')

  server.send(response, info.port, info.address, (err) => { // Send a message back to the sender to confirm the packet being received.
    if (err) {
      console.error('Failed to send response !!')
    } else {
      console.log('Response send Successfully')
    }
  })
})

server.bind(port)

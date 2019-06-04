const greeter = Promise.revolve('hello, world')
const sendHello = async () => {
  const data = await greeter
  console.log(data)
}
sendHello()
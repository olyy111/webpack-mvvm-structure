const greeter = Promise.resolve('hello, world')
const sendHello = async () => {
  const data = await greeter
  console.log(data)
}
sendHello()
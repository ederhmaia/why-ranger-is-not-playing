const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

// Load the protobufs
const ProtoObject = protoLoader.loadSync('./proto/phrases.proto')

// load the package definition from the proto file
const PhrasesDefinition = grpc.loadPackageDefinition(ProtoObject)

// initiate the client with the package definition
const Client = new PhrasesDefinition.PhraseService(
  'localhost:50051',
  grpc.credentials.createInsecure()
)

const List = Client.list({}, (err, phrases) => {
  if (err) {
    return err
  } else {
    return phrases
  }
})

export default List

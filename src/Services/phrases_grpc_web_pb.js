/**
 * @fileoverview gRPC-Web generated client stub for
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {}
grpc.web = require('grpc-web')

const proto = require('./phrases_pb.js')

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.PhraseServiceClient = function (hostname, credentials, options) {
  if (!options) options = {}
  options.format = 'text'

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options)

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname
}

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.PhraseServicePromiseClient = function (hostname, credentials, options) {
  if (!options) options = {}
  options.format = 'text'

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options)

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname
}

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Void,
 *   !proto.PhraseListResponse>}
 */
const methodDescriptor_PhraseService_List = new grpc.web.MethodDescriptor(
  '/PhraseService/List',
  grpc.web.MethodType.UNARY,
  proto.Void,
  proto.PhraseListResponse,
  /**
   * @param {!proto.Void} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary()
  },
  proto.PhraseListResponse.deserializeBinary
)

/**
 * @param {!proto.Void} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.PhraseListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PhraseListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PhraseServiceClient.prototype.list = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/PhraseService/List',
    request,
    metadata || {},
    methodDescriptor_PhraseService_List,
    callback
  )
}

/**
 * @param {!proto.Void} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PhraseListResponse>}
 *     Promise that resolves to the response
 */
proto.PhraseServicePromiseClient.prototype.list = function (request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + '/PhraseService/List',
    request,
    metadata || {},
    methodDescriptor_PhraseService_List
  )
}

module.exports = proto

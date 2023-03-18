export const Cards = [
  {
    id: 1,
    name: 'Continue',
    title: '100',
    src: require('../assets/cards/100.jpg'),
    description:
      'This interim response indicates that the client should continue the request or ignore the response if the request is already finished.',
  },
  {
    id: 2,
    name: 'Switching Protocol',
    title: '101',
    src: require('../assets/cards/101.jpg'),
    description:
      'This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.',
  },
  {
    id: 3,
    name: 'Processing',
    title: '102',
    src: require('../assets/cards/102.jpg'),
    description:
      'This code indicates that the server has received and is processing the request, but no response is available yet.',
  },
  {
    id: 4,
    name: 'Early Hints',
    title: '103',
    src: require('../assets/cards/103.jpg'),
    description:
      'This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.',
  },
  {
    id: 5,
    name: 'OK',
    title: '200',
    src: require('../assets/cards/200.jpg'),
    description: 'The request succeeded.',
  },
  {
    id: 6,
    name: 'Created',
    title: '201',
    src: require('../assets/cards/201.jpg'),
    description: 'The request succeeded, and a new resource was created as a result. ',
  },
  {
    id: 7,
    name: 'Accepted',
    title: '202',
    src: require('../assets/cards/202.jpg'),
    description: 'The request has been received but not yet acted upon.',
  },
  {
    id: 8,
    name: 'Non-Authoritative Information',
    title: '203',
    src: require('../assets/cards/203.jpg'),
    description:
      'This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.',
  },
  {
    id: 9,
    name: 'No Content',
    title: '204',
    src: require('../assets/cards/204.jpg'),
    description: 'There is no content to send for this request, but the headers may be useful.',
  },
  {
    id: 10,
    name: 'Partial Content',
    title: '206',
    src: require('../assets/cards/206.jpg'),
    description:
      'This response code is used when the Range header is sent from the client to request only part of a resource.',
  },
  {
    id: 11,
    name: 'Multi-Status',
    title: '207',
    src: require('../assets/cards/207.jpg'),
    description:
      'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.',
  },
  {
    id: 12,
    name: 'Multiple Choice',
    title: '300',
    src: require('../assets/cards/300.jpg'),
    description:
      'The request has more than one possible response. The user agent or user should choose one of them.',
  },
  {
    id: 13,
    name: 'Moved Permanently',
    title: '301',
    src: require('../assets/cards/301.jpg'),
    description:
      'The URL of the requested resource has been changed permanently. The new URL is given in the response.',
  },
  {
    id: 14,
    name: 'Found',
    title: '302',
    src: require('../assets/cards/302.jpg'),
    description:
      'This response code means that the URI of requested resource has been changed temporarily.',
  },
  {
    id: 15,
    name: 'Not Modified',
    title: '304',
    src: require('../assets/cards/304.jpg'),
    description:
      'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.',
  },
  {
    id: 16,
    name: 'Permanent Redirect',
    title: '308',
    src: require('../assets/cards/308.jpg'),
    description:
      'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.',
  },
  {
    id: 17,
    name: 'Bad Request',
    title: '400',
    src: require('../assets/cards/400.jpg'),
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error',
  },
  {
    id: 18,
    name: 'Unauthorized',
    title: '401',
    src: require('../assets/cards/401.jpg'),
    description:
      'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".',
  },
  {
    id: 19,
    name: 'Payment Required',
    title: '402',
    src: require('../assets/cards/402.jpg'),
    description: 'This response code is reserved for future use. ',
  },
  {
    id: 20,
    name: 'Forbidden',
    title: '403',
    src: require('../assets/cards/403.jpg'),
    description:
      'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.',
  },
  {
    id: 21,
    name: 'Not Found',
    title: '404',
    src: require('../assets/cards/404.jpg'),
    description: 'The server cannot find the requested resource. ',
  },
  {
    id: 22,
    name: 'Too Many Requests',
    title: '429',
    src: require('../assets/cards/429.jpg'),
    description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
  },
  {
    id: 23,
    name: 'No response',
    title: '444',
    src: require('../assets/cards/444.jpg'),
    description:
      'A 444 status code is thrown when a website unexpectedly closes the connection without sending any response to the client.',
  },
  {
    id: 24,
    name: 'Internal Server Error',
    title: '500',
    src: require('../assets/cards/500.jpg'),
    description: 'The server has encountered a situation it does not know how to handle.',
  },
  {
    id: 25,
    name: 'Not Implemented',
    title: '501',
    src: require('../assets/cards/501.jpg'),
    description: 'The request method is not supported by the server and cannot be handled.',
  },
  {
    id: 26,
    name: 'Bad Gateway',
    title: '502',
    src: require('../assets/cards/502.jpg'),
    description:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
  },
  {
    id: 27,
    name: 'Gateway Timeout',
    title: '504',
    src: require('../assets/cards/504.jpg'),
    description:
      'This error response is given when the server is acting as a gateway and cannot get a response in time.',
  },
  {
    id: 28,
    name: 'Network Connect Timeout Error',
    title: '599',
    src: require('../assets/cards/599.jpg'),
    description:
      'The 599 HTTP Status Code which means that the request is a network connection timeout error indicates that It appears that the server and a device are not communicating properly. ',
  },
];

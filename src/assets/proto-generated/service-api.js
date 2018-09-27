const Long = require('long');

const $root = {};

$root.__lookup = function(pbjs) {
  const root = pbjs.Root.fromJSON({
    'nested': {
      'com': {
        'nested': {
          'wixpress': {
            'nested': {
              'search': {
                'nested': {
                  'srs': {
                    'nested': {
                      'api': {
                        'nested': {
                          'Coords': {
                            'fields': {
                              'latitude': {
                                'type': 'double',
                                'id': 1
                              },
                              'longitude': {
                                'type': 'double',
                                'id': 2
                              }
                            }
                          },
                          'DocumentACL': {
                            'values': {
                              'RESERVED': 0,
                              'PUBLIC': 1,
                              'SITE_MEMBER': 100,
                              'SITE_OWNER': 200
                            }
                          },
                          'Document': {
                            'fields': {
                              'docId': {
                                'type': 'string',
                                'id': 1,
                                'options': {
                                  '(wix.api.minLength)': 1,
                                  '(wix.api.maxLength)': 256
                                }
                              },
                              'acl': {
                                'type': 'DocumentACL',
                                'id': 2
                              },
                              'docSummary': {
                                'type': 'string',
                                'id': 3,
                                'options': {
                                  '(wix.api.maxLength)': 4096
                                }
                              },
                              'dateCreated': {
                                'type': 'google.protobuf.Timestamp',
                                'id': 4
                              },
                              'dateUpdated': {
                                'type': 'google.protobuf.Timestamp',
                                'id': 5
                              },
                              'tags': {
                                'type': 'string',
                                'id': 6,
                                'options': {
                                  '(wix.api.maxLength)': 65536
                                }
                              },
                              'text1': {
                                'type': 'string',
                                'id': 7,
                                'options': {
                                  '(wix.api.maxLength)': 65536
                                }
                              },
                              'text2': {
                                'type': 'string',
                                'id': 8,
                                'options': {
                                  '(wix.api.maxLength)': 65536
                                }
                              },
                              'text3': {
                                'type': 'string',
                                'id': 9,
                                'options': {
                                  '(wix.api.maxLength)': 65536
                                }
                              },
                              'text4': {
                                'type': 'string',
                                'id': 10,
                                'options': {
                                  '(wix.api.maxLength)': 65536
                                }
                              },
                              'location': {
                                'type': 'Coords',
                                'id': 11
                              }
                            }
                          },
                          'DocumentsInfo': {
                            'fields': {
                              'collectionName': {
                                'type': 'string',
                                'id': 1,
                                'options': {
                                  '(wix.api.minLength)': 1,
                                  '(wix.api.maxLength)': 256
                                }
                              },
                              'docs': {
                                'rule': 'repeated',
                                'type': 'Document',
                                'id': 2
                              }
                            }
                          },
                          'DocumentsPutRequest': {
                            'fields': {
                              'data': {
                                'type': 'DocumentsInfo',
                                'id': 1
                              }
                            }
                          },
                          'DocumentsDeleteRequest': {
                            'fields': {
                              'collectionName': {
                                'type': 'string',
                                'id': 1
                              },
                              'docId': {
                                'rule': 'repeated',
                                'type': 'string',
                                'id': 2
                              }
                            }
                          },
                          'CollectionReconsileRequest': {
                            'fields': {
                              'data': {
                                'type': 'DocumentsInfo',
                                'id': 1
                              }
                            }
                          },
                          'CollectionDeleteRequest': {
                            'fields': {
                              'collectionName': {
                                'type': 'string',
                                'id': 1
                              }
                            }
                          },
                          'DocumentFeeder': {
                            'methods': {
                              'putSiteAppDocs': {
                                'requestType': 'DocumentsPutRequest',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/site_app_docs/put',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'deleteSiteAppDocs': {
                                'requestType': 'DocumentsDeleteRequest',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/site_app_docs/delete',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'reconcileCollectionSiteAppDocs': {
                                'requestType': 'CollectionReconsileRequest',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/site_app_docs_collection/reconsile',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'deleteSiteAppCollection': {
                                'requestType': 'CollectionDeleteRequest',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/site_app_docs_collection/delete',
                                  '(google.api.http).body': '*'
                                }
                              }
                            }
                          },
                          'SiteManagement': {
                            'methods': {
                              'siteDelete': {
                                'requestType': 'google.protobuf.Empty',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/mgmt/site_delete',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'siteApplicationDelete': {
                                'requestType': 'google.protobuf.Empty',
                                'responseType': 'google.protobuf.Empty',
                                'options': {
                                  '(google.api.http).post': '/v1/mgmt/site_app_delete',
                                  '(google.api.http).body': '*'
                                }
                              }
                            }
                          },
                          'Paging': {
                            'fields': {
                              'offset': {
                                'type': 'int32',
                                'id': 1,
                                'options': {
                                  '(wix.api.min)': 0,
                                  '(wix.api.max)': 1000
                                }
                              },
                              'limit': {
                                'type': 'int32',
                                'id': 2,
                                'options': {
                                  '(wix.api.max)': 1000
                                }
                              }
                            }
                          },
                          'SearchOptions': {
                            'fields': {
                              'acl': {
                                'type': 'DocumentACL',
                                'id': 1
                              },
                              'language': {
                                'type': 'string',
                                'id': 2
                              },
                              'location': {
                                'type': 'Coords',
                                'id': 3
                              }
                            }
                          },
                          'MatchedDocument': {
                            'fields': {
                              'appDefId': {
                                'type': 'string',
                                'id': 1
                              },
                              'collectionName': {
                                'type': 'string',
                                'id': 2
                              },
                              'docId': {
                                'type': 'string',
                                'id': 3
                              },
                              'docSummary': {
                                'type': 'string',
                                'id': 4
                              },
                              'matchedText': {
                                'type': 'string',
                                'id': 5
                              },
                              'relevance': {
                                'type': 'double',
                                'id': 6
                              }
                            }
                          },
                          'SearchCollectionRequest': {
                            'fields': {
                              'search': {
                                'type': 'string',
                                'id': 1
                              },
                              'collectionName': {
                                'type': 'string',
                                'id': 2,
                                'options': {
                                  '(wix.api.maxLength)': 256
                                }
                              },
                              'searchOptions': {
                                'type': 'SearchOptions',
                                'id': 3
                              },
                              'paging': {
                                'type': 'Paging',
                                'id': 4
                              }
                            }
                          },
                          'SearchResultSummary': {
                            'fields': {
                              'appDefId': {
                                'type': 'string',
                                'id': 1
                              },
                              'collectionName': {
                                'type': 'string',
                                'id': 2
                              },
                              'totalMatchedCount': {
                                'type': 'int32',
                                'id': 3
                              }
                            }
                          },
                          'SearchCollectionResponse': {
                            'fields': {
                              'documents': {
                                'rule': 'repeated',
                                'type': 'MatchedDocument',
                                'id': 1
                              },
                              'summary': {
                                'type': 'SearchResultSummary',
                                'id': 2
                              }
                            }
                          },
                          'SearchCollectionsRequest': {
                            'fields': {
                              'search': {
                                'type': 'string',
                                'id': 1
                              },
                              'collectionName': {
                                'rule': 'repeated',
                                'type': 'string',
                                'id': 2
                              },
                              'searchOptions': {
                                'type': 'SearchOptions',
                                'id': 3
                              },
                              'paging': {
                                'type': 'Paging',
                                'id': 4
                              }
                            }
                          },
                          'SearchAppsRequest': {
                            'fields': {
                              'search': {
                                'type': 'string',
                                'id': 1
                              },
                              'appDefId': {
                                'rule': 'repeated',
                                'type': 'string',
                                'id': 2
                              },
                              'searchOptions': {
                                'type': 'SearchOptions',
                                'id': 3
                              },
                              'paging': {
                                'type': 'Paging',
                                'id': 4
                              }
                            }
                          },
                          'DocumentSearcher': {
                            'methods': {
                              'searchCollection': {
                                'requestType': 'SearchCollectionRequest',
                                'responseType': 'SearchCollectionResponse',
                                'options': {
                                  '(google.api.http).post': '/api/v1/site_app_docs/collection/search',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'searchCollections': {
                                'requestType': 'SearchCollectionsRequest',
                                'responseType': 'SearchCollectionResponse',
                                'options': {
                                  '(google.api.http).post': '/api/v1/site_app_docs/collections/search',
                                  '(google.api.http).body': '*'
                                }
                              },
                              'searchApps': {
                                'requestType': 'SearchAppsRequest',
                                'responseType': 'SearchCollectionResponse',
                                'options': {
                                  '(google.api.http).post': '/api/v1/site_app_docs/search',
                                  '(google.api.http).body': '*'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      'google': {
        'nested': {
          'protobuf': {
            'options': {
              'go_package': 'github.com/golang/protobuf/protoc-gen-go/descriptor;descriptor',
              'java_package': 'com.google.protobuf',
              'java_outer_classname': 'DescriptorProtos',
              'csharp_namespace': 'Google.Protobuf.Reflection',
              'objc_class_prefix': 'GPB',
              'cc_enable_arenas': true,
              'optimize_for': 'SPEED'
            },
            'nested': {
              'Timestamp': {
                'fields': {
                  'seconds': {
                    'type': 'int64',
                    'id': 1
                  },
                  'nanos': {
                    'type': 'int32',
                    'id': 2
                  }
                }
              },
              'Empty': {
                'fields': {}
              },
              'FileDescriptorSet': {
                'fields': {
                  'file': {
                    'rule': 'repeated',
                    'type': 'FileDescriptorProto',
                    'id': 1,
                    'options': {
                      'packed': false
                    }
                  }
                }
              },
              'FileDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'package': {
                    'type': 'string',
                    'id': 2
                  },
                  'dependency': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 3
                  },
                  'publicDependency': {
                    'rule': 'repeated',
                    'type': 'int32',
                    'id': 10,
                    'options': {
                      'packed': false
                    }
                  },
                  'weakDependency': {
                    'rule': 'repeated',
                    'type': 'int32',
                    'id': 11,
                    'options': {
                      'packed': false
                    }
                  },
                  'messageType': {
                    'rule': 'repeated',
                    'type': 'DescriptorProto',
                    'id': 4,
                    'options': {
                      'packed': false
                    }
                  },
                  'enumType': {
                    'rule': 'repeated',
                    'type': 'EnumDescriptorProto',
                    'id': 5,
                    'options': {
                      'packed': false
                    }
                  },
                  'service': {
                    'rule': 'repeated',
                    'type': 'ServiceDescriptorProto',
                    'id': 6,
                    'options': {
                      'packed': false
                    }
                  },
                  'extension': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 7,
                    'options': {
                      'packed': false
                    }
                  },
                  'options': {
                    'type': 'FileOptions',
                    'id': 8
                  },
                  'sourceCodeInfo': {
                    'type': 'SourceCodeInfo',
                    'id': 9
                  },
                  'syntax': {
                    'type': 'string',
                    'id': 12
                  }
                }
              },
              'DescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'field': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 2,
                    'options': {
                      'packed': false
                    }
                  },
                  'extension': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 6,
                    'options': {
                      'packed': false
                    }
                  },
                  'nestedType': {
                    'rule': 'repeated',
                    'type': 'DescriptorProto',
                    'id': 3,
                    'options': {
                      'packed': false
                    }
                  },
                  'enumType': {
                    'rule': 'repeated',
                    'type': 'EnumDescriptorProto',
                    'id': 4,
                    'options': {
                      'packed': false
                    }
                  },
                  'extensionRange': {
                    'rule': 'repeated',
                    'type': 'ExtensionRange',
                    'id': 5,
                    'options': {
                      'packed': false
                    }
                  },
                  'oneofDecl': {
                    'rule': 'repeated',
                    'type': 'OneofDescriptorProto',
                    'id': 8,
                    'options': {
                      'packed': false
                    }
                  },
                  'options': {
                    'type': 'MessageOptions',
                    'id': 7
                  },
                  'reservedRange': {
                    'rule': 'repeated',
                    'type': 'ReservedRange',
                    'id': 9,
                    'options': {
                      'packed': false
                    }
                  },
                  'reservedName': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 10
                  }
                },
                'nested': {
                  'ExtensionRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      },
                      'options': {
                        'type': 'ExtensionRangeOptions',
                        'id': 3
                      }
                    }
                  },
                  'ReservedRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'ExtensionRangeOptions': {
                'fields': {
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'FieldDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'number': {
                    'type': 'int32',
                    'id': 3
                  },
                  'label': {
                    'type': 'Label',
                    'id': 4
                  },
                  'type': {
                    'type': 'Type',
                    'id': 5
                  },
                  'typeName': {
                    'type': 'string',
                    'id': 6
                  },
                  'extendee': {
                    'type': 'string',
                    'id': 2
                  },
                  'defaultValue': {
                    'type': 'string',
                    'id': 7
                  },
                  'oneofIndex': {
                    'type': 'int32',
                    'id': 9
                  },
                  'jsonName': {
                    'type': 'string',
                    'id': 10
                  },
                  'options': {
                    'type': 'FieldOptions',
                    'id': 8
                  }
                },
                'nested': {
                  'Type': {
                    'values': {
                      'TYPE_DOUBLE': 1,
                      'TYPE_FLOAT': 2,
                      'TYPE_INT64': 3,
                      'TYPE_UINT64': 4,
                      'TYPE_INT32': 5,
                      'TYPE_FIXED64': 6,
                      'TYPE_FIXED32': 7,
                      'TYPE_BOOL': 8,
                      'TYPE_STRING': 9,
                      'TYPE_GROUP': 10,
                      'TYPE_MESSAGE': 11,
                      'TYPE_BYTES': 12,
                      'TYPE_UINT32': 13,
                      'TYPE_ENUM': 14,
                      'TYPE_SFIXED32': 15,
                      'TYPE_SFIXED64': 16,
                      'TYPE_SINT32': 17,
                      'TYPE_SINT64': 18
                    }
                  },
                  'Label': {
                    'values': {
                      'LABEL_OPTIONAL': 1,
                      'LABEL_REQUIRED': 2,
                      'LABEL_REPEATED': 3
                    }
                  }
                }
              },
              'OneofDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'options': {
                    'type': 'OneofOptions',
                    'id': 2
                  }
                }
              },
              'EnumDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'value': {
                    'rule': 'repeated',
                    'type': 'EnumValueDescriptorProto',
                    'id': 2,
                    'options': {
                      'packed': false
                    }
                  },
                  'options': {
                    'type': 'EnumOptions',
                    'id': 3
                  },
                  'reservedRange': {
                    'rule': 'repeated',
                    'type': 'EnumReservedRange',
                    'id': 4,
                    'options': {
                      'packed': false
                    }
                  },
                  'reservedName': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 5
                  }
                },
                'nested': {
                  'EnumReservedRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'EnumValueDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'number': {
                    'type': 'int32',
                    'id': 2
                  },
                  'options': {
                    'type': 'EnumValueOptions',
                    'id': 3
                  }
                }
              },
              'ServiceDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'method': {
                    'rule': 'repeated',
                    'type': 'MethodDescriptorProto',
                    'id': 2,
                    'options': {
                      'packed': false
                    }
                  },
                  'options': {
                    'type': 'ServiceOptions',
                    'id': 3
                  }
                }
              },
              'MethodDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'inputType': {
                    'type': 'string',
                    'id': 2
                  },
                  'outputType': {
                    'type': 'string',
                    'id': 3
                  },
                  'options': {
                    'type': 'MethodOptions',
                    'id': 4
                  },
                  'clientStreaming': {
                    'type': 'bool',
                    'id': 5,
                    'options': {
                      'default': false
                    }
                  },
                  'serverStreaming': {
                    'type': 'bool',
                    'id': 6,
                    'options': {
                      'default': false
                    }
                  }
                }
              },
              'FileOptions': {
                'fields': {
                  'javaPackage': {
                    'type': 'string',
                    'id': 1
                  },
                  'javaOuterClassname': {
                    'type': 'string',
                    'id': 8
                  },
                  'javaMultipleFiles': {
                    'type': 'bool',
                    'id': 10,
                    'options': {
                      'default': false
                    }
                  },
                  'javaGenerateEqualsAndHash': {
                    'type': 'bool',
                    'id': 20,
                    'options': {
                      'deprecated': true
                    }
                  },
                  'javaStringCheckUtf8': {
                    'type': 'bool',
                    'id': 27,
                    'options': {
                      'default': false
                    }
                  },
                  'optimizeFor': {
                    'type': 'OptimizeMode',
                    'id': 9,
                    'options': {
                      'default': 'SPEED'
                    }
                  },
                  'goPackage': {
                    'type': 'string',
                    'id': 11
                  },
                  'ccGenericServices': {
                    'type': 'bool',
                    'id': 16,
                    'options': {
                      'default': false
                    }
                  },
                  'javaGenericServices': {
                    'type': 'bool',
                    'id': 17,
                    'options': {
                      'default': false
                    }
                  },
                  'pyGenericServices': {
                    'type': 'bool',
                    'id': 18,
                    'options': {
                      'default': false
                    }
                  },
                  'phpGenericServices': {
                    'type': 'bool',
                    'id': 42,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 23,
                    'options': {
                      'default': false
                    }
                  },
                  'ccEnableArenas': {
                    'type': 'bool',
                    'id': 31,
                    'options': {
                      'default': false
                    }
                  },
                  'objcClassPrefix': {
                    'type': 'string',
                    'id': 36
                  },
                  'csharpNamespace': {
                    'type': 'string',
                    'id': 37
                  },
                  'swiftPrefix': {
                    'type': 'string',
                    'id': 39
                  },
                  'phpClassPrefix': {
                    'type': 'string',
                    'id': 40
                  },
                  'phpNamespace': {
                    'type': 'string',
                    'id': 41
                  },
                  'phpMetadataNamespace': {
                    'type': 'string',
                    'id': 44
                  },
                  'rubyPackage': {
                    'type': 'string',
                    'id': 45
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  38,
                  38
                ]],
                'nested': {
                  'OptimizeMode': {
                    'values': {
                      'SPEED': 1,
                      'CODE_SIZE': 2,
                      'LITE_RUNTIME': 3
                    }
                  }
                }
              },
              'MessageOptions': {
                'fields': {
                  'messageSetWireFormat': {
                    'type': 'bool',
                    'id': 1,
                    'options': {
                      'default': false
                    }
                  },
                  'noStandardDescriptorAccessor': {
                    'type': 'bool',
                    'id': 2,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'mapEntry': {
                    'type': 'bool',
                    'id': 7
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [
                  [
                    8,
                    8
                  ],
                  [
                    9,
                    9
                  ]
                ]
              },
              'FieldOptions': {
                'fields': {
                  'ctype': {
                    'type': 'CType',
                    'id': 1,
                    'options': {
                      'default': 'STRING'
                    }
                  },
                  'packed': {
                    'type': 'bool',
                    'id': 2
                  },
                  'jstype': {
                    'type': 'JSType',
                    'id': 6,
                    'options': {
                      'default': 'JS_NORMAL'
                    }
                  },
                  'lazy': {
                    'type': 'bool',
                    'id': 5,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'weak': {
                    'type': 'bool',
                    'id': 10,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  4,
                  4
                ]],
                'nested': {
                  'CType': {
                    'values': {
                      'STRING': 0,
                      'CORD': 1,
                      'STRING_PIECE': 2
                    }
                  },
                  'JSType': {
                    'values': {
                      'JS_NORMAL': 0,
                      'JS_STRING': 1,
                      'JS_NUMBER': 2
                    }
                  }
                }
              },
              'OneofOptions': {
                'fields': {
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'EnumOptions': {
                'fields': {
                  'allowAlias': {
                    'type': 'bool',
                    'id': 2
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  5,
                  5
                ]]
              },
              'EnumValueOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 1,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'ServiceOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 33,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'MethodOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 33,
                    'options': {
                      'default': false
                    }
                  },
                  'idempotencyLevel': {
                    'type': 'IdempotencyLevel',
                    'id': 34,
                    'options': {
                      'default': 'IDEMPOTENCY_UNKNOWN'
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'nested': {
                  'IdempotencyLevel': {
                    'values': {
                      'IDEMPOTENCY_UNKNOWN': 0,
                      'NO_SIDE_EFFECTS': 1,
                      'IDEMPOTENT': 2
                    }
                  }
                }
              },
              'UninterpretedOption': {
                'fields': {
                  'name': {
                    'rule': 'repeated',
                    'type': 'NamePart',
                    'id': 2,
                    'options': {
                      'packed': false
                    }
                  },
                  'identifierValue': {
                    'type': 'string',
                    'id': 3
                  },
                  'positiveIntValue': {
                    'type': 'uint64',
                    'id': 4
                  },
                  'negativeIntValue': {
                    'type': 'int64',
                    'id': 5
                  },
                  'doubleValue': {
                    'type': 'double',
                    'id': 6
                  },
                  'stringValue': {
                    'type': 'bytes',
                    'id': 7
                  },
                  'aggregateValue': {
                    'type': 'string',
                    'id': 8
                  }
                },
                'nested': {
                  'NamePart': {
                    'fields': {
                      'namePart': {
                        'rule': 'required',
                        'type': 'string',
                        'id': 1
                      },
                      'isExtension': {
                        'rule': 'required',
                        'type': 'bool',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'SourceCodeInfo': {
                'fields': {
                  'location': {
                    'rule': 'repeated',
                    'type': 'Location',
                    'id': 1,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'nested': {
                  'Location': {
                    'fields': {
                      'path': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 1,
                        'options': {
                          'packed': true
                        }
                      },
                      'span': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 2,
                        'options': {
                          'packed': true
                        }
                      },
                      'leadingComments': {
                        'type': 'string',
                        'id': 3
                      },
                      'trailingComments': {
                        'type': 'string',
                        'id': 4
                      },
                      'leadingDetachedComments': {
                        'rule': 'repeated',
                        'type': 'string',
                        'id': 6
                      }
                    }
                  }
                }
              },
              'GeneratedCodeInfo': {
                'fields': {
                  'annotation': {
                    'rule': 'repeated',
                    'type': 'Annotation',
                    'id': 1,
                    'options': {
                      'packed': false
                    }
                  }
                },
                'nested': {
                  'Annotation': {
                    'fields': {
                      'path': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 1,
                        'options': {
                          'packed': true
                        }
                      },
                      'sourceFile': {
                        'type': 'string',
                        'id': 2
                      },
                      'begin': {
                        'type': 'int32',
                        'id': 3
                      },
                      'end': {
                        'type': 'int32',
                        'id': 4
                      }
                    }
                  }
                }
              }
            }
          },
          'api': {
            'options': {
              'go_package': 'google.golang.org/genproto/googleapis/api/annotations;annotations',
              'java_multiple_files': true,
              'java_outer_classname': 'HttpProto',
              'java_package': 'com.google.api',
              'objc_class_prefix': 'GAPI',
              'cc_enable_arenas': true
            },
            'nested': {
              'http': {
                'type': 'HttpRule',
                'id': 72295728,
                'extend': 'google.protobuf.MethodOptions'
              },
              'Http': {
                'fields': {
                  'rules': {
                    'rule': 'repeated',
                    'type': 'HttpRule',
                    'id': 1
                  }
                }
              },
              'HttpRule': {
                'oneofs': {
                  'pattern': {
                    'oneof': [
                      'get',
                      'put',
                      'post',
                      'delete',
                      'patch',
                      'custom'
                    ]
                  }
                },
                'fields': {
                  'selector': {
                    'type': 'string',
                    'id': 1
                  },
                  'get': {
                    'type': 'string',
                    'id': 2
                  },
                  'put': {
                    'type': 'string',
                    'id': 3
                  },
                  'post': {
                    'type': 'string',
                    'id': 4
                  },
                  'delete': {
                    'type': 'string',
                    'id': 5
                  },
                  'patch': {
                    'type': 'string',
                    'id': 6
                  },
                  'custom': {
                    'type': 'CustomHttpPattern',
                    'id': 8
                  },
                  'body': {
                    'type': 'string',
                    'id': 7
                  },
                  'additionalBindings': {
                    'rule': 'repeated',
                    'type': 'HttpRule',
                    'id': 11
                  }
                }
              },
              'CustomHttpPattern': {
                'fields': {
                  'kind': {
                    'type': 'string',
                    'id': 1
                  },
                  'path': {
                    'type': 'string',
                    'id': 2
                  }
                }
              }
            }
          }
        }
      },
      'wix': {
        'nested': {
          'api': {
            'options': {
              'java_multiple_files': true,
              'java_outer_classname': 'ValidationsProto',
              'java_package': 'com.wix.api'
            },
            'nested': {
              'exposure': {
                'type': 'Exposure',
                'id': 50101,
                'extend': 'google.protobuf.MethodOptions'
              },
              'maturity': {
                'type': 'Maturity',
                'id': 50102,
                'extend': 'google.protobuf.MethodOptions'
              },
              'deprecation': {
                'type': 'Deprecation',
                'id': 50103,
                'extend': 'google.protobuf.MethodOptions'
              },
              'Exposure': {
                'values': {
                  'PRIVATE': 0,
                  'INTERNAL': 1,
                  'PUBLIC': 2
                }
              },
              'Maturity': {
                'values': {
                  'ALPHA': 0,
                  'BETA': 1,
                  'IA': 2,
                  'GA': 3
                }
              },
              'Deprecation': {
                'values': {
                  'DEPRECATED': 0,
                  'UNSUPPORTED': 1
                }
              },
              'max': {
                'type': 'double',
                'id': 50201,
                'extend': 'google.protobuf.FieldOptions'
              },
              'min': {
                'type': 'double',
                'id': 50202,
                'extend': 'google.protobuf.FieldOptions'
              },
              'maxLength': {
                'type': 'int32',
                'id': 50203,
                'extend': 'google.protobuf.FieldOptions'
              },
              'minLength': {
                'type': 'int32',
                'id': 50204,
                'extend': 'google.protobuf.FieldOptions'
              },
              'format': {
                'type': 'Format',
                'id': 50205,
                'extend': 'google.protobuf.FieldOptions'
              },
              'pattern': {
                'type': 'string',
                'id': 50206,
                'extend': 'google.protobuf.FieldOptions'
              },
              'readOnly': {
                'type': 'bool',
                'id': 50208,
                'extend': 'google.protobuf.FieldOptions'
              },
              'required': {
                'type': 'string',
                'id': 50200,
                'extend': 'google.protobuf.MethodOptions'
              },
              'Format': {
                'values': {
                  'EMAIL': 0,
                  'HOSTNAME': 1,
                  'IPV4': 2,
                  'IPV6': 3,
                  'URI': 4,
                  'URI_REF': 5,
                  'URI_TEMPLATE': 6,
                  'PHONE': 7,
                  'CREDIT_CARD': 8,
                  'GUID': 9,
                  'COUNTRY': 10,
                  'LANGUAGE': 11
                }
              }
            }
          }
        }
      }
    }
  });

  $root.__lookup = function() {
    return path => {
      return root.lookup(path);
    };
  };
  return $root.__lookup();
};
$root.com = (function() {
  const com = {};

  com.wixpress = (function() {
    const wixpress = {};

    wixpress.search = (function() {
      const search = {};

      search.srs = (function() {
        const srs = {};

        srs.api = (function() {
          const api = {};

          api.Coords = (function() {

            class Coords {

              constructor(props) {
                this.latitude = props && props.latitude;
                this.longitude = props && props.longitude;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.latitude != null) {
                    if (typeof msg.latitude !== 'number') {
                      errors.field('latitude').error('number expected');
                    }
                  }
                  if (msg.longitude != null) {
                    if (typeof msg.longitude !== 'number') {
                      errors.field('longitude').error('number expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.latitude !== undefined) {
                    json.latitude = obj.latitude;
                  }
                  if (obj.longitude !== undefined) {
                    json.longitude = obj.longitude;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.Coords();

                if (json.latitude != null) {
                  result.latitude = json.latitude;
                } else {
                  result.latitude = 0;
                }
                if (json.longitude != null) {
                  result.longitude = json.longitude;
                } else {
                  result.longitude = 0;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'latitude': {
                      'type': 'double',
                      'id': 1
                    },
                    'longitude': {
                      'type': 'double',
                      'id': 2
                    }
                  }
                };
              }
            }

            Object.defineProperty(Coords.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.Coords');
              },
              enumerable: false,
              configurable: false
            });
            return Coords;
          }());
          api.DocumentACL = {
            verify: (value, helper, errors = helper.verification.Errors.empty()) => {
              switch (value) {
                default: {
                  errors.error('enum expected');
                }
                case 0:
                case 1:
                case 100:
                case 200:
                  break;
              }
              return errors;
            },
            'RESERVED': 0,
            0: 'RESERVED',
            'PUBLIC': 1,
            1: 'PUBLIC',
            'SITE_MEMBER': 100,
            100: 'SITE_MEMBER',
            'SITE_OWNER': 200,
            200: 'SITE_OWNER'
          };
          api.Document = (function() {

            class Document {

              constructor(props) {
                this.docId = props && props.docId;
                this.acl = props && props.acl;
                this.docSummary = props && props.docSummary;
                this.dateCreated = props && props.dateCreated;
                this.dateUpdated = props && props.dateUpdated;
                this.tags = props && props.tags;
                this.text1 = props && props.text1;
                this.text2 = props && props.text2;
                this.text3 = props && props.text3;
                this.text4 = props && props.text4;
                this.location = props && props.location;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.docId != null) {
                    if (typeof msg.docId !== 'string') {
                      errors.field('docId').error('string expected');
                    }
                  }
                  if (msg.acl != null) {
                    $root.com.wixpress.search.srs.api.DocumentACL.verify(msg.acl, helper, errors.field('acl'));
                  }
                  if (msg.docSummary != null) {
                    if (typeof msg.docSummary !== 'string') {
                      errors.field('docSummary').error('string expected');
                    }
                  }
                  if (msg.dateCreated != null) {
                    $root.google.protobuf.Timestamp.verify(msg.dateCreated, helper, errors.field('dateCreated'));
                  }
                  if (msg.dateUpdated != null) {
                    $root.google.protobuf.Timestamp.verify(msg.dateUpdated, helper, errors.field('dateUpdated'));
                  }
                  if (msg.tags != null) {
                    if (typeof msg.tags !== 'string') {
                      errors.field('tags').error('string expected');
                    }
                  }
                  if (msg.text1 != null) {
                    if (typeof msg.text1 !== 'string') {
                      errors.field('text1').error('string expected');
                    }
                  }
                  if (msg.text2 != null) {
                    if (typeof msg.text2 !== 'string') {
                      errors.field('text2').error('string expected');
                    }
                  }
                  if (msg.text3 != null) {
                    if (typeof msg.text3 !== 'string') {
                      errors.field('text3').error('string expected');
                    }
                  }
                  if (msg.text4 != null) {
                    if (typeof msg.text4 !== 'string') {
                      errors.field('text4').error('string expected');
                    }
                  }
                  if (msg.location != null) {
                    $root.com.wixpress.search.srs.api.Coords.verify(msg.location, helper, errors.field('location'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.docId !== undefined) {
                    json.docId = obj.docId;
                  }
                  if (obj.acl !== undefined) {
                    json.acl = $root.com.wixpress.search.srs.api.DocumentACL[obj.acl];
                  }
                  if (obj.docSummary !== undefined) {
                    json.docSummary = obj.docSummary;
                  }
                  if (obj.dateCreated !== undefined) {
                    json.dateCreated = $root.google.protobuf.Timestamp.toJSON(obj.dateCreated, helper);
                  }
                  if (obj.dateUpdated !== undefined) {
                    json.dateUpdated = $root.google.protobuf.Timestamp.toJSON(obj.dateUpdated, helper);
                  }
                  if (obj.tags !== undefined) {
                    json.tags = obj.tags;
                  }
                  if (obj.text1 !== undefined) {
                    json.text1 = obj.text1;
                  }
                  if (obj.text2 !== undefined) {
                    json.text2 = obj.text2;
                  }
                  if (obj.text3 !== undefined) {
                    json.text3 = obj.text3;
                  }
                  if (obj.text4 !== undefined) {
                    json.text4 = obj.text4;
                  }
                  if (obj.location !== undefined) {
                    json.location = $root.com.wixpress.search.srs.api.Coords.toJSON(obj.location, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.Document();

                if (json.docId != null) {
                  result.docId = json.docId;
                } else {
                  result.docId = '';
                }
                if (json.acl != null) {
                  result.acl = $root.com.wixpress.search.srs.api.DocumentACL[json.acl];
                } else {
                  result.acl = 0;
                }
                if (json.docSummary != null) {
                  result.docSummary = json.docSummary;
                } else {
                  result.docSummary = '';
                }
                if (json.dateCreated != null) {
                  result.dateCreated = $root.google.protobuf.Timestamp.fromJSON(json.dateCreated, helper);
                } else {
                  delete result.dateCreated;
                }
                if (json.dateUpdated != null) {
                  result.dateUpdated = $root.google.protobuf.Timestamp.fromJSON(json.dateUpdated, helper);
                } else {
                  delete result.dateUpdated;
                }
                if (json.tags != null) {
                  result.tags = json.tags;
                } else {
                  result.tags = '';
                }
                if (json.text1 != null) {
                  result.text1 = json.text1;
                } else {
                  result.text1 = '';
                }
                if (json.text2 != null) {
                  result.text2 = json.text2;
                } else {
                  result.text2 = '';
                }
                if (json.text3 != null) {
                  result.text3 = json.text3;
                } else {
                  result.text3 = '';
                }
                if (json.text4 != null) {
                  result.text4 = json.text4;
                } else {
                  result.text4 = '';
                }
                if (json.location != null) {
                  result.location = $root.com.wixpress.search.srs.api.Coords.fromJSON(json.location, helper);
                } else {
                  delete result.location;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'docId': {
                      'type': 'string',
                      'id': 1,
                      'options': {
                        '(wix.api.minLength)': 1,
                        '(wix.api.maxLength)': 256
                      }
                    },
                    'acl': {
                      'type': $root.com.wixpress.search.srs.api.DocumentACL,
                      'id': 2
                    },
                    'docSummary': {
                      'type': 'string',
                      'id': 3,
                      'options': {
                        '(wix.api.maxLength)': 4096
                      }
                    },
                    'dateCreated': {
                      'type': $root.google.protobuf.Timestamp,
                      'id': 4
                    },
                    'dateUpdated': {
                      'type': $root.google.protobuf.Timestamp,
                      'id': 5
                    },
                    'tags': {
                      'type': 'string',
                      'id': 6,
                      'options': {
                        '(wix.api.maxLength)': 65536
                      }
                    },
                    'text1': {
                      'type': 'string',
                      'id': 7,
                      'options': {
                        '(wix.api.maxLength)': 65536
                      }
                    },
                    'text2': {
                      'type': 'string',
                      'id': 8,
                      'options': {
                        '(wix.api.maxLength)': 65536
                      }
                    },
                    'text3': {
                      'type': 'string',
                      'id': 9,
                      'options': {
                        '(wix.api.maxLength)': 65536
                      }
                    },
                    'text4': {
                      'type': 'string',
                      'id': 10,
                      'options': {
                        '(wix.api.maxLength)': 65536
                      }
                    },
                    'location': {
                      'type': $root.com.wixpress.search.srs.api.Coords,
                      'id': 11
                    }
                  }
                };
              }
            }

            Object.defineProperty(Document.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.Document');
              },
              enumerable: false,
              configurable: false
            });
            return Document;
          }());
          api.DocumentsInfo = (function() {

            class DocumentsInfo {

              constructor(props) {
                this.collectionName = props && props.collectionName;
                this.docs = props && props.docs;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                  if (msg.docs != null) {
                    const fieldErrors = errors.field('docs');

                    if (!Array.isArray(msg.docs)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.docs.forEach((value, index) => {
                        $root.com.wixpress.search.srs.api.Document.verify(value, helper, fieldErrors.index(index));
                      });
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  if (obj.docs !== undefined) {
                    json.docs = obj.docs.map(e => {
                      return $root.com.wixpress.search.srs.api.Document.toJSON(e, helper);
                    });
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.DocumentsInfo();

                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                if (json.docs != null) {
                  result.docs = json.docs.map(e => {
                    return $root.com.wixpress.search.srs.api.Document.fromJSON(e, helper);
                  });
                } else {
                  result.docs = [];
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'collectionName': {
                      'type': 'string',
                      'id': 1,
                      'options': {
                        '(wix.api.minLength)': 1,
                        '(wix.api.maxLength)': 256
                      }
                    },
                    'docs': {
                      'rule': 'repeated',
                      'type': $root.com.wixpress.search.srs.api.Document,
                      'id': 2
                    }
                  }
                };
              }
            }

            Object.defineProperty(DocumentsInfo.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.DocumentsInfo');
              },
              enumerable: false,
              configurable: false
            });
            return DocumentsInfo;
          }());
          api.DocumentsPutRequest = (function() {

            class DocumentsPutRequest {

              constructor(props) {
                this.data = props && props.data;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.data != null) {
                    $root.com.wixpress.search.srs.api.DocumentsInfo.verify(msg.data, helper, errors.field('data'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.data !== undefined) {
                    json.data = $root.com.wixpress.search.srs.api.DocumentsInfo.toJSON(obj.data, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.DocumentsPutRequest();

                if (json.data != null) {
                  result.data = $root.com.wixpress.search.srs.api.DocumentsInfo.fromJSON(json.data, helper);
                } else {
                  delete result.data;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'data': {
                      'type': $root.com.wixpress.search.srs.api.DocumentsInfo,
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(DocumentsPutRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.DocumentsPutRequest');
              },
              enumerable: false,
              configurable: false
            });
            return DocumentsPutRequest;
          }());
          api.DocumentsDeleteRequest = (function() {

            class DocumentsDeleteRequest {

              constructor(props) {
                this.collectionName = props && props.collectionName;
                this.docId = props && props.docId;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                  if (msg.docId != null) {
                    const fieldErrors = errors.field('docId');

                    if (!Array.isArray(msg.docId)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.docId.forEach((value, index) => {
                        if (typeof value !== 'string') {
                          fieldErrors.index(index).error('string expected');
                        }
                      });
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  if (obj.docId !== undefined) {
                    json.docId = obj.docId.map(e => {
                      return e;
                    });
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.DocumentsDeleteRequest();

                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                if (json.docId != null) {
                  result.docId = json.docId.map(e => {
                    return e;
                  });
                } else {
                  result.docId = [];
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'collectionName': {
                      'type': 'string',
                      'id': 1
                    },
                    'docId': {
                      'rule': 'repeated',
                      'type': 'string',
                      'id': 2
                    }
                  }
                };
              }
            }

            Object.defineProperty(DocumentsDeleteRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.DocumentsDeleteRequest');
              },
              enumerable: false,
              configurable: false
            });
            return DocumentsDeleteRequest;
          }());
          api.CollectionReconsileRequest = (function() {

            class CollectionReconsileRequest {

              constructor(props) {
                this.data = props && props.data;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.data != null) {
                    $root.com.wixpress.search.srs.api.DocumentsInfo.verify(msg.data, helper, errors.field('data'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.data !== undefined) {
                    json.data = $root.com.wixpress.search.srs.api.DocumentsInfo.toJSON(obj.data, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.CollectionReconsileRequest();

                if (json.data != null) {
                  result.data = $root.com.wixpress.search.srs.api.DocumentsInfo.fromJSON(json.data, helper);
                } else {
                  delete result.data;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'data': {
                      'type': $root.com.wixpress.search.srs.api.DocumentsInfo,
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(CollectionReconsileRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.CollectionReconsileRequest');
              },
              enumerable: false,
              configurable: false
            });
            return CollectionReconsileRequest;
          }());
          api.CollectionDeleteRequest = (function() {

            class CollectionDeleteRequest {

              constructor(props) {
                this.collectionName = props && props.collectionName;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.CollectionDeleteRequest();

                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'collectionName': {
                      'type': 'string',
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(CollectionDeleteRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.CollectionDeleteRequest');
              },
              enumerable: false,
              configurable: false
            });
            return CollectionDeleteRequest;
          }());
          api.DocumentFeeder = (function() {

            class DocumentFeeder {

              constructor() {
                if (this.constructor.name === DocumentFeeder.name) {
                  throw new TypeError('class DocumentFeeder is abstract');
                }
              }

              putSiteAppDocs(aspects, msg) {
                throw new TypeError('method putSiteAppDocs is abstract');
              }

              deleteSiteAppDocs(aspects, msg) {
                throw new TypeError('method deleteSiteAppDocs is abstract');
              }

              reconcileCollectionSiteAppDocs(aspects, msg) {
                throw new TypeError('method reconcileCollectionSiteAppDocs is abstract');
              }

              deleteSiteAppCollection(aspects, msg) {
                throw new TypeError('method deleteSiteAppCollection is abstract');
              }
            }

            DocumentFeeder.prototype.putSiteAppDocs._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.DocumentsPutRequest,
                $root.google.protobuf.Empty
              ];
            };
            DocumentFeeder.prototype.deleteSiteAppDocs._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.DocumentsDeleteRequest,
                $root.google.protobuf.Empty
              ];
            };
            DocumentFeeder.prototype.reconcileCollectionSiteAppDocs._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.CollectionReconsileRequest,
                $root.google.protobuf.Empty
              ];
            };
            DocumentFeeder.prototype.deleteSiteAppCollection._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.CollectionDeleteRequest,
                $root.google.protobuf.Empty
              ];
            };
            DocumentFeeder.prototype.putSiteAppDocs.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.putSiteAppDocs');
            };
            DocumentFeeder.prototype.deleteSiteAppDocs.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.deleteSiteAppDocs');
            };
            DocumentFeeder.prototype.reconcileCollectionSiteAppDocs.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.reconcileCollectionSiteAppDocs');
            };
            DocumentFeeder.prototype.deleteSiteAppCollection.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.deleteSiteAppCollection');
            };
            Object.defineProperty(DocumentFeeder.prototype, '__isRpcService__', {
              value: true,
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(DocumentFeeder.prototype, '__fqn__', {
              value: 'com.wixpress.search.srs.api.DocumentFeeder',
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(DocumentFeeder.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.DocumentFeeder');
              },
              enumerable: false,
              configurable: false
            });
            return DocumentFeeder;
          }());
          api.SiteManagement = (function() {

            class SiteManagement {

              constructor() {
                if (this.constructor.name === SiteManagement.name) {
                  throw new TypeError('class SiteManagement is abstract');
                }
              }

              siteDelete(aspects, msg) {
                throw new TypeError('method siteDelete is abstract');
              }

              siteApplicationDelete(aspects, msg) {
                throw new TypeError('method siteApplicationDelete is abstract');
              }
            }

            SiteManagement.prototype.siteDelete._messageTypes = function() {
              return [
                $root.google.protobuf.Empty,
                $root.google.protobuf.Empty
              ];
            };
            SiteManagement.prototype.siteApplicationDelete._messageTypes = function() {
              return [
                $root.google.protobuf.Empty,
                $root.google.protobuf.Empty
              ];
            };
            SiteManagement.prototype.siteDelete.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.siteDelete');
            };
            SiteManagement.prototype.siteApplicationDelete.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.siteApplicationDelete');
            };
            Object.defineProperty(SiteManagement.prototype, '__isRpcService__', {
              value: true,
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(SiteManagement.prototype, '__fqn__', {
              value: 'com.wixpress.search.srs.api.SiteManagement',
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(SiteManagement.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SiteManagement');
              },
              enumerable: false,
              configurable: false
            });
            return SiteManagement;
          }());
          api.Paging = (function() {

            class Paging {

              constructor(props) {
                this.offset = props && props.offset;
                this.limit = props && props.limit;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.offset != null) {
                    if (!Number.isInteger(msg.offset)) {
                      errors.field('offset').error('integer expected');
                    }
                  }
                  if (msg.limit != null) {
                    if (!Number.isInteger(msg.limit)) {
                      errors.field('limit').error('integer expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.offset !== undefined) {
                    json.offset = obj.offset;
                  }
                  if (obj.limit !== undefined) {
                    json.limit = obj.limit;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.Paging();

                if (json.offset != null) {
                  result.offset = json.offset;
                } else {
                  result.offset = 0;
                }
                if (json.limit != null) {
                  result.limit = json.limit;
                } else {
                  result.limit = 0;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'offset': {
                      'type': 'int32',
                      'id': 1,
                      'options': {
                        '(wix.api.min)': 0,
                        '(wix.api.max)': 1000
                      }
                    },
                    'limit': {
                      'type': 'int32',
                      'id': 2,
                      'options': {
                        '(wix.api.max)': 1000
                      }
                    }
                  }
                };
              }
            }

            Object.defineProperty(Paging.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.Paging');
              },
              enumerable: false,
              configurable: false
            });
            return Paging;
          }());
          api.SearchOptions = (function() {

            class SearchOptions {

              constructor(props) {
                this.acl = props && props.acl;
                this.language = props && props.language;
                this.location = props && props.location;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.acl != null) {
                    $root.com.wixpress.search.srs.api.DocumentACL.verify(msg.acl, helper, errors.field('acl'));
                  }
                  if (msg.language != null) {
                    if (typeof msg.language !== 'string') {
                      errors.field('language').error('string expected');
                    }
                  }
                  if (msg.location != null) {
                    $root.com.wixpress.search.srs.api.Coords.verify(msg.location, helper, errors.field('location'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.acl !== undefined) {
                    json.acl = $root.com.wixpress.search.srs.api.DocumentACL[obj.acl];
                  }
                  if (obj.language !== undefined) {
                    json.language = obj.language;
                  }
                  if (obj.location !== undefined) {
                    json.location = $root.com.wixpress.search.srs.api.Coords.toJSON(obj.location, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchOptions();

                if (json.acl != null) {
                  result.acl = $root.com.wixpress.search.srs.api.DocumentACL[json.acl];
                } else {
                  result.acl = 0;
                }
                if (json.language != null) {
                  result.language = json.language;
                } else {
                  result.language = '';
                }
                if (json.location != null) {
                  result.location = $root.com.wixpress.search.srs.api.Coords.fromJSON(json.location, helper);
                } else {
                  delete result.location;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'acl': {
                      'type': $root.com.wixpress.search.srs.api.DocumentACL,
                      'id': 1
                    },
                    'language': {
                      'type': 'string',
                      'id': 2
                    },
                    'location': {
                      'type': $root.com.wixpress.search.srs.api.Coords,
                      'id': 3
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchOptions.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchOptions');
              },
              enumerable: false,
              configurable: false
            });
            return SearchOptions;
          }());
          api.MatchedDocument = (function() {

            class MatchedDocument {

              constructor(props) {
                this.appDefId = props && props.appDefId;
                this.collectionName = props && props.collectionName;
                this.docId = props && props.docId;
                this.docSummary = props && props.docSummary;
                this.matchedText = props && props.matchedText;
                this.relevance = props && props.relevance;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.appDefId != null) {
                    if (typeof msg.appDefId !== 'string') {
                      errors.field('appDefId').error('string expected');
                    }
                  }
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                  if (msg.docId != null) {
                    if (typeof msg.docId !== 'string') {
                      errors.field('docId').error('string expected');
                    }
                  }
                  if (msg.docSummary != null) {
                    if (typeof msg.docSummary !== 'string') {
                      errors.field('docSummary').error('string expected');
                    }
                  }
                  if (msg.matchedText != null) {
                    if (typeof msg.matchedText !== 'string') {
                      errors.field('matchedText').error('string expected');
                    }
                  }
                  if (msg.relevance != null) {
                    if (typeof msg.relevance !== 'number') {
                      errors.field('relevance').error('number expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.appDefId !== undefined) {
                    json.appDefId = obj.appDefId;
                  }
                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  if (obj.docId !== undefined) {
                    json.docId = obj.docId;
                  }
                  if (obj.docSummary !== undefined) {
                    json.docSummary = obj.docSummary;
                  }
                  if (obj.matchedText !== undefined) {
                    json.matchedText = obj.matchedText;
                  }
                  if (obj.relevance !== undefined) {
                    json.relevance = obj.relevance;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.MatchedDocument();

                if (json.appDefId != null) {
                  result.appDefId = json.appDefId;
                } else {
                  result.appDefId = '';
                }
                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                if (json.docId != null) {
                  result.docId = json.docId;
                } else {
                  result.docId = '';
                }
                if (json.docSummary != null) {
                  result.docSummary = json.docSummary;
                } else {
                  result.docSummary = '';
                }
                if (json.matchedText != null) {
                  result.matchedText = json.matchedText;
                } else {
                  result.matchedText = '';
                }
                if (json.relevance != null) {
                  result.relevance = json.relevance;
                } else {
                  result.relevance = 0;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'appDefId': {
                      'type': 'string',
                      'id': 1
                    },
                    'collectionName': {
                      'type': 'string',
                      'id': 2
                    },
                    'docId': {
                      'type': 'string',
                      'id': 3
                    },
                    'docSummary': {
                      'type': 'string',
                      'id': 4
                    },
                    'matchedText': {
                      'type': 'string',
                      'id': 5
                    },
                    'relevance': {
                      'type': 'double',
                      'id': 6
                    }
                  }
                };
              }
            }

            Object.defineProperty(MatchedDocument.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.MatchedDocument');
              },
              enumerable: false,
              configurable: false
            });
            return MatchedDocument;
          }());
          api.SearchCollectionRequest = (function() {

            class SearchCollectionRequest {

              constructor(props) {
                this.search = props && props.search;
                this.collectionName = props && props.collectionName;
                this.searchOptions = props && props.searchOptions;
                this.paging = props && props.paging;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.search != null) {
                    if (typeof msg.search !== 'string') {
                      errors.field('search').error('string expected');
                    }
                  }
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                  if (msg.searchOptions != null) {
                    $root.com.wixpress.search.srs.api.SearchOptions.verify(msg.searchOptions, helper, errors.field('searchOptions'));
                  }
                  if (msg.paging != null) {
                    $root.com.wixpress.search.srs.api.Paging.verify(msg.paging, helper, errors.field('paging'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.search !== undefined) {
                    json.search = obj.search;
                  }
                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  if (obj.searchOptions !== undefined) {
                    json.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.toJSON(obj.searchOptions, helper);
                  }
                  if (obj.paging !== undefined) {
                    json.paging = $root.com.wixpress.search.srs.api.Paging.toJSON(obj.paging, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchCollectionRequest();

                if (json.search != null) {
                  result.search = json.search;
                } else {
                  result.search = '';
                }
                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                if (json.searchOptions != null) {
                  result.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.fromJSON(json.searchOptions, helper);
                } else {
                  delete result.searchOptions;
                }
                if (json.paging != null) {
                  result.paging = $root.com.wixpress.search.srs.api.Paging.fromJSON(json.paging, helper);
                } else {
                  delete result.paging;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'search': {
                      'type': 'string',
                      'id': 1
                    },
                    'collectionName': {
                      'type': 'string',
                      'id': 2,
                      'options': {
                        '(wix.api.maxLength)': 256
                      }
                    },
                    'searchOptions': {
                      'type': $root.com.wixpress.search.srs.api.SearchOptions,
                      'id': 3
                    },
                    'paging': {
                      'type': $root.com.wixpress.search.srs.api.Paging,
                      'id': 4
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchCollectionRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchCollectionRequest');
              },
              enumerable: false,
              configurable: false
            });
            return SearchCollectionRequest;
          }());
          api.SearchResultSummary = (function() {

            class SearchResultSummary {

              constructor(props) {
                this.appDefId = props && props.appDefId;
                this.collectionName = props && props.collectionName;
                this.totalMatchedCount = props && props.totalMatchedCount;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.appDefId != null) {
                    if (typeof msg.appDefId !== 'string') {
                      errors.field('appDefId').error('string expected');
                    }
                  }
                  if (msg.collectionName != null) {
                    if (typeof msg.collectionName !== 'string') {
                      errors.field('collectionName').error('string expected');
                    }
                  }
                  if (msg.totalMatchedCount != null) {
                    if (!Number.isInteger(msg.totalMatchedCount)) {
                      errors.field('totalMatchedCount').error('integer expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.appDefId !== undefined) {
                    json.appDefId = obj.appDefId;
                  }
                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName;
                  }
                  if (obj.totalMatchedCount !== undefined) {
                    json.totalMatchedCount = obj.totalMatchedCount;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchResultSummary();

                if (json.appDefId != null) {
                  result.appDefId = json.appDefId;
                } else {
                  result.appDefId = '';
                }
                if (json.collectionName != null) {
                  result.collectionName = json.collectionName;
                } else {
                  result.collectionName = '';
                }
                if (json.totalMatchedCount != null) {
                  result.totalMatchedCount = json.totalMatchedCount;
                } else {
                  result.totalMatchedCount = 0;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'appDefId': {
                      'type': 'string',
                      'id': 1
                    },
                    'collectionName': {
                      'type': 'string',
                      'id': 2
                    },
                    'totalMatchedCount': {
                      'type': 'int32',
                      'id': 3
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchResultSummary.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchResultSummary');
              },
              enumerable: false,
              configurable: false
            });
            return SearchResultSummary;
          }());
          api.SearchCollectionResponse = (function() {

            class SearchCollectionResponse {

              constructor(props) {
                this.documents = props && props.documents;
                this.summary = props && props.summary;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.documents != null) {
                    const fieldErrors = errors.field('documents');

                    if (!Array.isArray(msg.documents)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.documents.forEach((value, index) => {
                        $root.com.wixpress.search.srs.api.MatchedDocument.verify(value, helper, fieldErrors.index(index));
                      });
                    }
                  }
                  if (msg.summary != null) {
                    $root.com.wixpress.search.srs.api.SearchResultSummary.verify(msg.summary, helper, errors.field('summary'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.documents !== undefined) {
                    json.documents = obj.documents.map(e => {
                      return $root.com.wixpress.search.srs.api.MatchedDocument.toJSON(e, helper);
                    });
                  }
                  if (obj.summary !== undefined) {
                    json.summary = $root.com.wixpress.search.srs.api.SearchResultSummary.toJSON(obj.summary, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchCollectionResponse();

                if (json.documents != null) {
                  result.documents = json.documents.map(e => {
                    return $root.com.wixpress.search.srs.api.MatchedDocument.fromJSON(e, helper);
                  });
                } else {
                  result.documents = [];
                }
                if (json.summary != null) {
                  result.summary = $root.com.wixpress.search.srs.api.SearchResultSummary.fromJSON(json.summary, helper);
                } else {
                  delete result.summary;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'documents': {
                      'rule': 'repeated',
                      'type': $root.com.wixpress.search.srs.api.MatchedDocument,
                      'id': 1
                    },
                    'summary': {
                      'type': $root.com.wixpress.search.srs.api.SearchResultSummary,
                      'id': 2
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchCollectionResponse.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchCollectionResponse');
              },
              enumerable: false,
              configurable: false
            });
            return SearchCollectionResponse;
          }());
          api.SearchCollectionsRequest = (function() {

            class SearchCollectionsRequest {

              constructor(props) {
                this.search = props && props.search;
                this.collectionName = props && props.collectionName;
                this.searchOptions = props && props.searchOptions;
                this.paging = props && props.paging;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.search != null) {
                    if (typeof msg.search !== 'string') {
                      errors.field('search').error('string expected');
                    }
                  }
                  if (msg.collectionName != null) {
                    const fieldErrors = errors.field('collectionName');

                    if (!Array.isArray(msg.collectionName)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.collectionName.forEach((value, index) => {
                        if (typeof value !== 'string') {
                          fieldErrors.index(index).error('string expected');
                        }
                      });
                    }
                  }
                  if (msg.searchOptions != null) {
                    $root.com.wixpress.search.srs.api.SearchOptions.verify(msg.searchOptions, helper, errors.field('searchOptions'));
                  }
                  if (msg.paging != null) {
                    $root.com.wixpress.search.srs.api.Paging.verify(msg.paging, helper, errors.field('paging'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.search !== undefined) {
                    json.search = obj.search;
                  }
                  if (obj.collectionName !== undefined) {
                    json.collectionName = obj.collectionName.map(e => {
                      return e;
                    });
                  }
                  if (obj.searchOptions !== undefined) {
                    json.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.toJSON(obj.searchOptions, helper);
                  }
                  if (obj.paging !== undefined) {
                    json.paging = $root.com.wixpress.search.srs.api.Paging.toJSON(obj.paging, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchCollectionsRequest();

                if (json.search != null) {
                  result.search = json.search;
                } else {
                  result.search = '';
                }
                if (json.collectionName != null) {
                  result.collectionName = json.collectionName.map(e => {
                    return e;
                  });
                } else {
                  result.collectionName = [];
                }
                if (json.searchOptions != null) {
                  result.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.fromJSON(json.searchOptions, helper);
                } else {
                  delete result.searchOptions;
                }
                if (json.paging != null) {
                  result.paging = $root.com.wixpress.search.srs.api.Paging.fromJSON(json.paging, helper);
                } else {
                  delete result.paging;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'search': {
                      'type': 'string',
                      'id': 1
                    },
                    'collectionName': {
                      'rule': 'repeated',
                      'type': 'string',
                      'id': 2
                    },
                    'searchOptions': {
                      'type': $root.com.wixpress.search.srs.api.SearchOptions,
                      'id': 3
                    },
                    'paging': {
                      'type': $root.com.wixpress.search.srs.api.Paging,
                      'id': 4
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchCollectionsRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchCollectionsRequest');
              },
              enumerable: false,
              configurable: false
            });
            return SearchCollectionsRequest;
          }());
          api.SearchAppsRequest = (function() {

            class SearchAppsRequest {

              constructor(props) {
                this.search = props && props.search;
                this.appDefId = props && props.appDefId;
                this.searchOptions = props && props.searchOptions;
                this.paging = props && props.paging;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.search != null) {
                    if (typeof msg.search !== 'string') {
                      errors.field('search').error('string expected');
                    }
                  }
                  if (msg.appDefId != null) {
                    const fieldErrors = errors.field('appDefId');

                    if (!Array.isArray(msg.appDefId)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.appDefId.forEach((value, index) => {
                        if (typeof value !== 'string') {
                          fieldErrors.index(index).error('string expected');
                        }
                      });
                    }
                  }
                  if (msg.searchOptions != null) {
                    $root.com.wixpress.search.srs.api.SearchOptions.verify(msg.searchOptions, helper, errors.field('searchOptions'));
                  }
                  if (msg.paging != null) {
                    $root.com.wixpress.search.srs.api.Paging.verify(msg.paging, helper, errors.field('paging'));
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.search !== undefined) {
                    json.search = obj.search;
                  }
                  if (obj.appDefId !== undefined) {
                    json.appDefId = obj.appDefId.map(e => {
                      return e;
                    });
                  }
                  if (obj.searchOptions !== undefined) {
                    json.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.toJSON(obj.searchOptions, helper);
                  }
                  if (obj.paging !== undefined) {
                    json.paging = $root.com.wixpress.search.srs.api.Paging.toJSON(obj.paging, helper);
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.search.srs.api.SearchAppsRequest();

                if (json.search != null) {
                  result.search = json.search;
                } else {
                  result.search = '';
                }
                if (json.appDefId != null) {
                  result.appDefId = json.appDefId.map(e => {
                    return e;
                  });
                } else {
                  result.appDefId = [];
                }
                if (json.searchOptions != null) {
                  result.searchOptions = $root.com.wixpress.search.srs.api.SearchOptions.fromJSON(json.searchOptions, helper);
                } else {
                  delete result.searchOptions;
                }
                if (json.paging != null) {
                  result.paging = $root.com.wixpress.search.srs.api.Paging.fromJSON(json.paging, helper);
                } else {
                  delete result.paging;
                }
                return result;
              }

              static describe() {
                return {
                  'fields': {
                    'search': {
                      'type': 'string',
                      'id': 1
                    },
                    'appDefId': {
                      'rule': 'repeated',
                      'type': 'string',
                      'id': 2
                    },
                    'searchOptions': {
                      'type': $root.com.wixpress.search.srs.api.SearchOptions,
                      'id': 3
                    },
                    'paging': {
                      'type': $root.com.wixpress.search.srs.api.Paging,
                      'id': 4
                    }
                  }
                };
              }
            }

            Object.defineProperty(SearchAppsRequest.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.SearchAppsRequest');
              },
              enumerable: false,
              configurable: false
            });
            return SearchAppsRequest;
          }());
          api.DocumentSearcher = (function() {

            class DocumentSearcher {

              constructor() {
                if (this.constructor.name === DocumentSearcher.name) {
                  throw new TypeError('class DocumentSearcher is abstract');
                }
              }

              searchCollection(aspects, msg) {
                throw new TypeError('method searchCollection is abstract');
              }

              searchCollections(aspects, msg) {
                throw new TypeError('method searchCollections is abstract');
              }

              searchApps(aspects, msg) {
                throw new TypeError('method searchApps is abstract');
              }
            }

            DocumentSearcher.prototype.searchCollection._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.SearchCollectionRequest,
                $root.com.wixpress.search.srs.api.SearchCollectionResponse
              ];
            };
            DocumentSearcher.prototype.searchCollections._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.SearchCollectionsRequest,
                $root.com.wixpress.search.srs.api.SearchCollectionResponse
              ];
            };
            DocumentSearcher.prototype.searchApps._messageTypes = function() {
              return [
                $root.com.wixpress.search.srs.api.SearchAppsRequest,
                $root.com.wixpress.search.srs.api.SearchCollectionResponse
              ];
            };
            DocumentSearcher.prototype.searchCollection.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.searchCollection');
            };
            DocumentSearcher.prototype.searchCollections.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.searchCollections');
            };
            DocumentSearcher.prototype.searchApps.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.search.srs.api.searchApps');
            };
            Object.defineProperty(DocumentSearcher.prototype, '__isRpcService__', {
              value: true,
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(DocumentSearcher.prototype, '__fqn__', {
              value: 'com.wixpress.search.srs.api.DocumentSearcher',
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(DocumentSearcher.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.search.srs.api.DocumentSearcher');
              },
              enumerable: false,
              configurable: false
            });
            return DocumentSearcher;
          }());
          return api;
        }());
        return srs;
      }());
      return search;
    }());
    return wixpress;
  }());
  return com;
}());
$root.google = (function() {
  const google = {};

  google.protobuf = (function() {
    const protobuf = {};

    protobuf.Timestamp = (function() {

      class Timestamp {

        constructor(props) {
          this.seconds = props && props.seconds;
          this.nanos = props && props.nanos;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (msg != null && !(msg instanceof Date)) {
            errors.error('Date expected');
          }
          return errors;
        }

        static toJSON(obj, helper) {
          return obj && obj.toISOString();
        }

        static fromJSON(json, helper) {
          return json && new Date(json);
        }

        static describe() {
          return {
            'fields': {
              'seconds': {
                'type': 'int64',
                'id': 1
              },
              'nanos': {
                'type': 'int32',
                'id': 2
              }
            }
          };
        }
      }

      Object.defineProperty(Timestamp.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.protobuf.Timestamp');
        },
        enumerable: false,
        configurable: false
      });
      return Timestamp;
    }());
    protobuf.Empty = (function() {

      class Empty {

        constructor(props) {}

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (!(typeof msg === 'object' && !Array.isArray(msg) && Object.keys(msg).length === 0)) {
              errors.error('empty object expected');
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.protobuf.Empty();

          return result;
        }

        static describe() {
          return {
            'fields': {}
          };
        }
      }

      Object.defineProperty(Empty.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.protobuf.Empty');
        },
        enumerable: false,
        configurable: false
      });
      return Empty;
    }());
    return protobuf;
  }());
  google.api = (function() {
    const api = {};

    api.Http = (function() {

      class Http {

        constructor(props) {
          this.rules = props && props.rules;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (msg.rules != null) {
              const fieldErrors = errors.field('rules');

              if (!Array.isArray(msg.rules)) {
                fieldErrors.error('array expected');
              } else {
                msg.rules.forEach((value, index) => {
                  $root.google.api.HttpRule.verify(value, helper, fieldErrors.index(index));
                });
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.rules !== undefined) {
              json.rules = obj.rules.map(e => {
                return $root.google.api.HttpRule.toJSON(e, helper);
              });
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.Http();

          if (json.rules != null) {
            result.rules = json.rules.map(e => {
              return $root.google.api.HttpRule.fromJSON(e, helper);
            });
          } else {
            result.rules = [];
          }
          return result;
        }

        static describe() {
          return {
            'fields': {
              'rules': {
                'rule': 'repeated',
                'type': $root.google.api.HttpRule,
                'id': 1
              }
            }
          };
        }
      }

      Object.defineProperty(Http.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.Http');
        },
        enumerable: false,
        configurable: false
      });
      return Http;
    }());
    api.HttpRule = (function() {

      class HttpRule {

        constructor(props) {
          this.selector = props && props.selector;
          this.get = props && props.get;
          this.put = props && props.put;
          this.post = props && props.post;
          this.delete = props && props.delete;
          this.patch = props && props.patch;
          this.custom = props && props.custom;
          this.body = props && props.body;
          this.additionalBindings = props && props.additionalBindings;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            const oneOfMutex = {};

            if (msg.selector != null) {
              if (typeof msg.selector !== 'string') {
                errors.field('selector').error('string expected');
              }
            }
            if (msg.get != null) {
              if (oneOfMutex['pattern']) {
                errors.field('get').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.get !== 'string') {
                  errors.field('get').error('string expected');
                }
              }
            }
            if (msg.put != null) {
              if (oneOfMutex['pattern']) {
                errors.field('put').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.put !== 'string') {
                  errors.field('put').error('string expected');
                }
              }
            }
            if (msg.post != null) {
              if (oneOfMutex['pattern']) {
                errors.field('post').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.post !== 'string') {
                  errors.field('post').error('string expected');
                }
              }
            }
            if (msg.delete != null) {
              if (oneOfMutex['pattern']) {
                errors.field('delete').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.delete !== 'string') {
                  errors.field('delete').error('string expected');
                }
              }
            }
            if (msg.patch != null) {
              if (oneOfMutex['pattern']) {
                errors.field('patch').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.patch !== 'string') {
                  errors.field('patch').error('string expected');
                }
              }
            }
            if (msg.custom != null) {
              if (oneOfMutex['pattern']) {
                errors.field('custom').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                $root.google.api.CustomHttpPattern.verify(msg.custom, helper, errors.field('custom'));
              }
            }
            if (msg.body != null) {
              if (typeof msg.body !== 'string') {
                errors.field('body').error('string expected');
              }
            }
            if (msg.additionalBindings != null) {
              const fieldErrors = errors.field('additionalBindings');

              if (!Array.isArray(msg.additionalBindings)) {
                fieldErrors.error('array expected');
              } else {
                msg.additionalBindings.forEach((value, index) => {
                  $root.google.api.HttpRule.verify(value, helper, fieldErrors.index(index));
                });
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.selector !== undefined) {
              json.selector = obj.selector;
            }
            if (obj.get !== undefined) {
              json.get = obj.get;
            }
            if (obj.put !== undefined) {
              json.put = obj.put;
            }
            if (obj.post !== undefined) {
              json.post = obj.post;
            }
            if (obj.delete !== undefined) {
              json.delete = obj.delete;
            }
            if (obj.patch !== undefined) {
              json.patch = obj.patch;
            }
            if (obj.custom !== undefined) {
              json.custom = $root.google.api.CustomHttpPattern.toJSON(obj.custom, helper);
            }
            if (obj.body !== undefined) {
              json.body = obj.body;
            }
            if (obj.additionalBindings !== undefined) {
              json.additionalBindings = obj.additionalBindings.map(e => {
                return $root.google.api.HttpRule.toJSON(e, helper);
              });
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.HttpRule();

          if (json.selector != null) {
            result.selector = json.selector;
          } else {
            result.selector = '';
          }
          if (json.get != null) {
            result.get = json.get;
          } else {
            delete result.get;
          }
          if (json.put != null) {
            result.put = json.put;
          } else {
            delete result.put;
          }
          if (json.post != null) {
            result.post = json.post;
          } else {
            delete result.post;
          }
          if (json.delete != null) {
            result.delete = json.delete;
          } else {
            delete result.delete;
          }
          if (json.patch != null) {
            result.patch = json.patch;
          } else {
            delete result.patch;
          }
          if (json.custom != null) {
            result.custom = $root.google.api.CustomHttpPattern.fromJSON(json.custom, helper);
          } else {
            delete result.custom;
          }
          if (json.body != null) {
            result.body = json.body;
          } else {
            result.body = '';
          }
          if (json.additionalBindings != null) {
            result.additionalBindings = json.additionalBindings.map(e => {
              return $root.google.api.HttpRule.fromJSON(e, helper);
            });
          } else {
            result.additionalBindings = [];
          }
          return result;
        }

        static describe() {
          return {
            'oneofs': {
              'pattern': {
                'oneof': [
                  'get',
                  'put',
                  'post',
                  'delete',
                  'patch',
                  'custom'
                ]
              }
            },
            'fields': {
              'selector': {
                'type': 'string',
                'id': 1
              },
              'get': {
                'type': 'string',
                'id': 2
              },
              'put': {
                'type': 'string',
                'id': 3
              },
              'post': {
                'type': 'string',
                'id': 4
              },
              'delete': {
                'type': 'string',
                'id': 5
              },
              'patch': {
                'type': 'string',
                'id': 6
              },
              'custom': {
                'type': $root.google.api.CustomHttpPattern,
                'id': 8
              },
              'body': {
                'type': 'string',
                'id': 7
              },
              'additionalBindings': {
                'rule': 'repeated',
                'type': $root.google.api.HttpRule,
                'id': 11
              }
            }
          };
        }
      }

      Object.defineProperty(HttpRule.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.HttpRule');
        },
        enumerable: false,
        configurable: false
      });
      return HttpRule;
    }());
    api.CustomHttpPattern = (function() {

      class CustomHttpPattern {

        constructor(props) {
          this.kind = props && props.kind;
          this.path = props && props.path;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (msg.kind != null) {
              if (typeof msg.kind !== 'string') {
                errors.field('kind').error('string expected');
              }
            }
            if (msg.path != null) {
              if (typeof msg.path !== 'string') {
                errors.field('path').error('string expected');
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.kind !== undefined) {
              json.kind = obj.kind;
            }
            if (obj.path !== undefined) {
              json.path = obj.path;
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.CustomHttpPattern();

          if (json.kind != null) {
            result.kind = json.kind;
          } else {
            result.kind = '';
          }
          if (json.path != null) {
            result.path = json.path;
          } else {
            result.path = '';
          }
          return result;
        }

        static describe() {
          return {
            'fields': {
              'kind': {
                'type': 'string',
                'id': 1
              },
              'path': {
                'type': 'string',
                'id': 2
              }
            }
          };
        }
      }

      Object.defineProperty(CustomHttpPattern.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.CustomHttpPattern');
        },
        enumerable: false,
        configurable: false
      });
      return CustomHttpPattern;
    }());
    return api;
  }());
  return google;
}());
$root.wix = (function() {
  const wix = {};

  wix.api = (function() {
    const api = {};

    api.Exposure = {
      verify: (value, helper, errors = helper.verification.Errors.empty()) => {
        switch (value) {
          default: {
            errors.error('enum expected');
          }
          case 0:
          case 1:
          case 2:
            break;
        }
        return errors;
      },
      'PRIVATE': 0,
      0: 'PRIVATE',
      'INTERNAL': 1,
      1: 'INTERNAL',
      'PUBLIC': 2,
      2: 'PUBLIC'
    };
    api.Maturity = {
      verify: (value, helper, errors = helper.verification.Errors.empty()) => {
        switch (value) {
          default: {
            errors.error('enum expected');
          }
          case 0:
          case 1:
          case 2:
          case 3:
            break;
        }
        return errors;
      },
      'ALPHA': 0,
      0: 'ALPHA',
      'BETA': 1,
      1: 'BETA',
      'IA': 2,
      2: 'IA',
      'GA': 3,
      3: 'GA'
    };
    api.Deprecation = {
      verify: (value, helper, errors = helper.verification.Errors.empty()) => {
        switch (value) {
          default: {
            errors.error('enum expected');
          }
          case 0:
          case 1:
            break;
        }
        return errors;
      },
      'DEPRECATED': 0,
      0: 'DEPRECATED',
      'UNSUPPORTED': 1,
      1: 'UNSUPPORTED'
    };
    api.Format = {
      verify: (value, helper, errors = helper.verification.Errors.empty()) => {
        switch (value) {
          default: {
            errors.error('enum expected');
          }
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
            break;
        }
        return errors;
      },
      'EMAIL': 0,
      0: 'EMAIL',
      'HOSTNAME': 1,
      1: 'HOSTNAME',
      'IPV4': 2,
      2: 'IPV4',
      'IPV6': 3,
      3: 'IPV6',
      'URI': 4,
      4: 'URI',
      'URI_REF': 5,
      5: 'URI_REF',
      'URI_TEMPLATE': 6,
      6: 'URI_TEMPLATE',
      'PHONE': 7,
      7: 'PHONE',
      'CREDIT_CARD': 8,
      8: 'CREDIT_CARD',
      'GUID': 9,
      9: 'GUID',
      'COUNTRY': 10,
      10: 'COUNTRY',
      'LANGUAGE': 11,
      11: 'LANGUAGE'
    };
    return api;
  }());
  return wix;
}());
module.exports = $root;
import * as Long from "long";

export namespace com {
    export namespace wixpress {
        export namespace search {
            export namespace srs {
                export namespace api {
                    export interface Coords {
                        latitude?: (number | null);
                        longitude?: (number | null);
                    }
                    export enum DocumentACL {
                        RESERVED = 0,
                        PUBLIC = 1,
                        SITE_MEMBER = 100,
                        SITE_OWNER = 200,
                    }
                    export interface Document {
                        docId?: (string | null);
                        acl?: (com.wixpress.search.srs.api.DocumentACL | null);
                        docSummary?: (string | null);
                        dateCreated?: (Date | null);
                        dateUpdated?: (Date | null);
                        tags?: (string | null);
                        text1?: (string | null);
                        text2?: (string | null);
                        text3?: (string | null);
                        text4?: (string | null);
                        location?: (com.wixpress.search.srs.api.Coords | null);
                    }
                    export interface DocumentsInfo {
                        collectionName?: (string | null);
                        docs?: (com.wixpress.search.srs.api.Document[] | null);
                    }
                    export interface DocumentsPutRequest {
                        data?: (com.wixpress.search.srs.api.DocumentsInfo | null);
                    }
                    export interface DocumentsDeleteRequest {
                        collectionName?: (string | null);
                        docId?: (string[] | null);
                    }
                    export interface CollectionReconsileRequest {
                        data?: (com.wixpress.search.srs.api.DocumentsInfo | null);
                    }
                    export interface CollectionDeleteRequest {
                        collectionName?: (string | null);
                    }
                    export abstract class DocumentFeeder {
                        abstract putSiteAppDocs(aspects: object, req: com.wixpress.search.srs.api.DocumentsPutRequest): Promise<{}>
                        abstract deleteSiteAppDocs(aspects: object, req: com.wixpress.search.srs.api.DocumentsDeleteRequest): Promise<{}>
                        abstract reconcileCollectionSiteAppDocs(aspects: object, req: com.wixpress.search.srs.api.CollectionReconsileRequest): Promise<{}>
                        abstract deleteSiteAppCollection(aspects: object, req: com.wixpress.search.srs.api.CollectionDeleteRequest): Promise<{}>
                    }
                    export abstract class SiteManagement {
                        abstract siteDelete(aspects: object, req: {}): Promise<{}>
                        abstract siteApplicationDelete(aspects: object, req: {}): Promise<{}>
                    }
                    export interface Paging {
                        offset?: (number | null);
                        limit?: (number | null);
                    }
                    export interface SearchOptions {
                        acl?: (com.wixpress.search.srs.api.DocumentACL | null);
                        language?: (string | null);
                        location?: (com.wixpress.search.srs.api.Coords | null);
                    }
                    export interface MatchedDocument {
                        appDefId?: (string | null);
                        collectionName?: (string | null);
                        docId?: (string | null);
                        docSummary?: (string | null);
                        matchedText?: (string | null);
                        relevance?: (number | null);
                    }
                    export interface SearchCollectionRequest {
                        search?: (string | null);
                        collectionName?: (string | null);
                        searchOptions?: (com.wixpress.search.srs.api.SearchOptions | null);
                        paging?: (com.wixpress.search.srs.api.Paging | null);
                    }
                    export interface SearchResultSummary {
                        appDefId?: (string | null);
                        collectionName?: (string | null);
                        totalMatchedCount?: (number | null);
                    }
                    export interface SearchCollectionResponse {
                        documents?: (com.wixpress.search.srs.api.MatchedDocument[] | null);
                        summary?: (com.wixpress.search.srs.api.SearchResultSummary | null);
                    }
                    export interface SearchCollectionsRequest {
                        search?: (string | null);
                        collectionName?: (string[] | null);
                        searchOptions?: (com.wixpress.search.srs.api.SearchOptions | null);
                        paging?: (com.wixpress.search.srs.api.Paging | null);
                    }
                    export interface SearchAppsRequest {
                        search?: (string | null);
                        appDefId?: (string[] | null);
                        searchOptions?: (com.wixpress.search.srs.api.SearchOptions | null);
                        paging?: (com.wixpress.search.srs.api.Paging | null);
                    }
                    export abstract class DocumentSearcher {
                        abstract searchCollection(aspects: object, req: com.wixpress.search.srs.api.SearchCollectionRequest): Promise<com.wixpress.search.srs.api.SearchCollectionResponse>
                        abstract searchCollections(aspects: object, req: com.wixpress.search.srs.api.SearchCollectionsRequest): Promise<com.wixpress.search.srs.api.SearchCollectionResponse>
                        abstract searchApps(aspects: object, req: com.wixpress.search.srs.api.SearchAppsRequest): Promise<com.wixpress.search.srs.api.SearchCollectionResponse>
                    }
                }
            }
        }
    }
}
export namespace google {
    export namespace api {
        export interface Http {
            rules?: (google.api.HttpRule[] | null);
        }
        export interface HttpRule {
            selector?: (string | null);
            get?: (string | null);
            put?: (string | null);
            post?: (string | null);
            delete?: (string | null);
            patch?: (string | null);
            custom?: (google.api.CustomHttpPattern | null);
            body?: (string | null);
            additionalBindings?: (google.api.HttpRule[] | null);
        }
        export interface CustomHttpPattern {
            kind?: (string | null);
            path?: (string | null);
        }
    }
}
export namespace wix {
    export namespace api {
        export enum Exposure {
            PRIVATE = 0,
            INTERNAL = 1,
            PUBLIC = 2,
        }
        export enum Maturity {
            ALPHA = 0,
            BETA = 1,
            IA = 2,
            GA = 3,
        }
        export enum Deprecation {
            DEPRECATED = 0,
            UNSUPPORTED = 1,
        }
        export enum Format {
            EMAIL = 0,
            HOSTNAME = 1,
            IPV4 = 2,
            IPV6 = 3,
            URI = 4,
            URI_REF = 5,
            URI_TEMPLATE = 6,
            PHONE = 7,
            CREDIT_CARD = 8,
            GUID = 9,
            COUNTRY = 10,
            LANGUAGE = 11,
        }
    }
}
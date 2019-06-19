/**
 * Galaxy 3.2 API (wip)
 * Galaxy 3.2 API (wip)
 *
 * OpenAPI spec version: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Body6 } from '../model/body6';
import { InlineResponse20010 } from '../model/inlineResponse20010';
import { InlineResponse20011 } from '../model/inlineResponse20011';
import { InlineResponse20012 } from '../model/inlineResponse20012';
import { InlineResponse20013 } from '../model/inlineResponse20013';
import { InlineResponse20014 } from '../model/inlineResponse20014';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse2008 } from '../model/inlineResponse2008';
import { InlineResponse2009 } from '../model/inlineResponse2009';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class V1Service {

    protected basePath = 'https://galaxy.ansible.com/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listApiV1RootViewApiV1(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public listApiV1RootViewApiV1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public listApiV1RootViewApiV1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public listApiV1RootViewApiV1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<{ [key: string]: string; }>(`${this.basePath}/api/v1/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listApiV1SearchViewApiV1Search(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public listApiV1SearchViewApiV1Search(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public listApiV1SearchViewApiV1Search(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public listApiV1SearchViewApiV1Search(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/api/v1/search/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listContentSearchViewApiV1SearchContent(page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2008>;
    public listContentSearchViewApiV1SearchContent(page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2008>>;
    public listContentSearchViewApiV1SearchContent(page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2008>>;
    public listContentSearchViewApiV1SearchContent(page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2008>(`${this.basePath}/api/v1/search/content/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listNamespaceListApiV1Namespaces(page?: number, pageSize?: number, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2007>;
    public listNamespaceListApiV1Namespaces(page?: number, pageSize?: number, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2007>>;
    public listNamespaceListApiV1Namespaces(page?: number, pageSize?: number, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2007>>;
    public listNamespaceListApiV1Namespaces(page?: number, pageSize?: number, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2007>(`${this.basePath}/api/v1/namespaces/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listRoleSearchViewApiV1SearchRoles(page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2008>;
    public listRoleSearchViewApiV1SearchRoles(page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2008>>;
    public listRoleSearchViewApiV1SearchRoles(page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2008>>;
    public listRoleSearchViewApiV1SearchRoles(page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2008>(`${this.basePath}/api/v1/search/roles/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listTagListApiV1Tags(page?: number, pageSize?: number, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20010>;
    public listTagListApiV1Tags(page?: number, pageSize?: number, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20010>>;
    public listTagListApiV1Tags(page?: number, pageSize?: number, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20010>>;
    public listTagListApiV1Tags(page?: number, pageSize?: number, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20010>(`${this.basePath}/api/v1/tags/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listTagsSearchViewApiV1SearchTags(page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2009>;
    public listTagsSearchViewApiV1SearchTags(page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2009>>;
    public listTagsSearchViewApiV1SearchTags(page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2009>>;
    public listTagsSearchViewApiV1SearchTags(page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2009>(`${this.basePath}/api/v1/search/tags/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listUserListApiV1Users(page?: number, pageSize?: number, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public listUserListApiV1Users(page?: number, pageSize?: number, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public listUserListApiV1Users(page?: number, pageSize?: number, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public listUserListApiV1Users(page?: number, pageSize?: number, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.basePath}/api/v1/users/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listUserStarredListApiV1UsersIdStarred(id: string, page?: number, pageSize?: number, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20013>;
    public listUserStarredListApiV1UsersIdStarred(id: string, page?: number, pageSize?: number, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20013>>;
    public listUserStarredListApiV1UsersIdStarred(id: string, page?: number, pageSize?: number, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20013>>;
    public listUserStarredListApiV1UsersIdStarred(id: string, page?: number, pageSize?: number, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listUserStarredListApiV1UsersIdStarred.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20013>(`${this.basePath}/api/v1/users/${encodeURIComponent(String(id))}/starred/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listUserSubscriptionListApiV1UsersIdSubscriptions(id: string, page?: number, pageSize?: number, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20014>;
    public listUserSubscriptionListApiV1UsersIdSubscriptions(id: string, page?: number, pageSize?: number, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20014>>;
    public listUserSubscriptionListApiV1UsersIdSubscriptions(id: string, page?: number, pageSize?: number, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20014>>;
    public listUserSubscriptionListApiV1UsersIdSubscriptions(id: string, page?: number, pageSize?: number, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listUserSubscriptionListApiV1UsersIdSubscriptions.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20014>(`${this.basePath}/api/v1/users/${encodeURIComponent(String(id))}/subscriptions/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param body some body
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public partialUpdateUserDetailApiV1UsersId(id: string, body?: Body6, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public partialUpdateUserDetailApiV1UsersId(id: string, body?: Body6, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public partialUpdateUserDetailApiV1UsersId(id: string, body?: Body6, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public partialUpdateUserDetailApiV1UsersId(id: string, body?: Body6, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling partialUpdateUserDetailApiV1UsersId.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<InlineResponse20012>(`${this.basePath}/api/v1/users/${encodeURIComponent(String(id))}/`,
            body,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveActiveUserViewApiV1Me(search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2006>;
    public retrieveActiveUserViewApiV1Me(search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2006>>;
    public retrieveActiveUserViewApiV1Me(search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2006>>;
    public retrieveActiveUserViewApiV1Me(search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2006>(`${this.basePath}/api/v1/me/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveTagDetailApiV1TagsId(id: string, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20011>;
    public retrieveTagDetailApiV1TagsId(id: string, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20011>>;
    public retrieveTagDetailApiV1TagsId(id: string, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20011>>;
    public retrieveTagDetailApiV1TagsId(id: string, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling retrieveTagDetailApiV1TagsId.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20011>(`${this.basePath}/api/v1/tags/${encodeURIComponent(String(id))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param search A search term.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveUserDetailApiV1UsersId(id: string, search?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public retrieveUserDetailApiV1UsersId(id: string, search?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public retrieveUserDetailApiV1UsersId(id: string, search?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public retrieveUserDetailApiV1UsersId(id: string, search?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling retrieveUserDetailApiV1UsersId.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (search !== undefined && search !== null) {
            queryParameters = queryParameters.set('search', <any>search);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.basePath}/api/v1/users/${encodeURIComponent(String(id))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

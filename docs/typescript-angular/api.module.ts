import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CollectionImportsService } from './api/collectionImports.service';
import { CollectionVersionsService } from './api/collectionVersions.service';
import { CollectionsService } from './api/collections.service';
import { DownloadService } from './api/download.service';
import { InternalService } from './api/internal.service';
import { IntrospectionService } from './api/introspection.service';
import { MeService } from './api/me.service';
import { NamespacesService } from './api/namespaces.service';
import { NotificationsService } from './api/notifications.service';
import { SearchService } from './api/search.service';
import { TagsService } from './api/tags.service';
import { UsersService } from './api/users.service';
import { V1Service } from './api/v1.service';
import { V2Service } from './api/v2.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CollectionImportsService,
    CollectionVersionsService,
    CollectionsService,
    DownloadService,
    InternalService,
    IntrospectionService,
    MeService,
    NamespacesService,
    NotificationsService,
    SearchService,
    TagsService,
    UsersService,
    V1Service,
    V2Service ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}

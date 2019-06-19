import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DefaultService } from './api/default.service';
import { InternalService } from './api/internal.service';
import { IntrospectionService } from './api/introspection.service';
import { MeService } from './api/me.service';
import { NamespacesService } from './api/namespaces.service';
import { SearchService } from './api/search.service';
import { TagsService } from './api/tags.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DefaultService,
    InternalService,
    IntrospectionService,
    MeService,
    NamespacesService,
    SearchService,
    TagsService ]
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

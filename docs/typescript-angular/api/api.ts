export * from './default.service';
import { DefaultService } from './default.service';
export * from './internal.service';
import { InternalService } from './internal.service';
export * from './introspection.service';
import { IntrospectionService } from './introspection.service';
export * from './me.service';
import { MeService } from './me.service';
export const APIS = [DefaultService, InternalService, IntrospectionService, MeService];

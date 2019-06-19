export * from './default.service';
import { DefaultService } from './default.service';
export * from './introspection.service';
import { IntrospectionService } from './introspection.service';
export const APIS = [DefaultService, IntrospectionService];

/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model outlet
 *
 */
export type outlet = $Result.DefaultSelection<Prisma.$outletPayload>;
/**
 * Model product
 *
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>;
/**
 * Model rental
 *
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>;
/**
 * Model sales
 *
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **outlet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Outlets
   * const outlets = await prisma.outlet.findMany()
   * ```
   */
  get outlet(): Prisma.outletDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
   * ```
   */
  get rental(): Prisma.rentalDelegate<ExtArgs>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sales
   * const sales = await prisma.sales.findMany()
   * ```
   */
  get sales(): Prisma.salesDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    outlet: 'outlet';
    product: 'product';
    rental: 'rental';
    sales: 'sales';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'outlet' | 'product' | 'rental' | 'sales' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      outlet: {
        payload: Prisma.$outletPayload<ExtArgs>;
        fields: Prisma.outletFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.outletFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.outletFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          findFirst: {
            args: Prisma.outletFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.outletFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          findMany: {
            args: Prisma.outletFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>[];
          };
          create: {
            args: Prisma.outletCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          createMany: {
            args: Prisma.outletCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.outletDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          update: {
            args: Prisma.outletUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          deleteMany: {
            args: Prisma.outletDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.outletUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.outletUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$outletPayload>;
          };
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOutlet>;
          };
          groupBy: {
            args: Prisma.outletGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OutletGroupByOutputType>[];
          };
          count: {
            args: Prisma.outletCountArgs<ExtArgs>;
            result: $Utils.Optional<OutletCountAggregateOutputType> | number;
          };
        };
      };
      product: {
        payload: Prisma.$productPayload<ExtArgs>;
        fields: Prisma.productFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>[];
          };
          create: {
            args: Prisma.productCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.productCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>;
        fields: Prisma.rentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[];
          };
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRental>;
          };
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>;
            result: $Utils.Optional<RentalCountAggregateOutputType> | number;
          };
        };
      };
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>;
        fields: Prisma.salesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[];
          };
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSales>;
          };
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SalesGroupByOutputType>[];
          };
          count: {
            args: Prisma.salesCountArgs<ExtArgs>;
            result: $Utils.Optional<SalesCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    outlet: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | CompanyCountOutputTypeCountOutletArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOutletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: outletWhereInput;
  };

  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    product: number;
  };

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | OutletCountOutputTypeCountProductArgs;
  };

  // Custom InputTypes

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountProductArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: productWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    rental: number;
    sales: number;
  };

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | ProductCountOutputTypeCountRentalArgs;
    sales?: boolean | ProductCountOutputTypeCountSalesArgs;
  };

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRentalArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: rentalWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: salesWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    rental: number;
    sales: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    rental?: boolean | UserCountOutputTypeCountRentalArgs;
    sales?: boolean | UserCountOutputTypeCountSalesArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      outlet?: boolean | company$outletArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    outlet?: boolean | company$outletArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      outlet: Prisma.$outletPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    outlet<T extends company$outletArgs<ExtArgs> = {}>(
      args?: Subset<T, company$outletArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.outlet
   */
  export type company$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    where?: outletWhereInput;
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    cursor?: outletWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null;
    _min: OutletMinAggregateOutputType | null;
    _max: OutletMaxAggregateOutputType | null;
  };

  export type OutletMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OutletMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OutletCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    city: number;
    state: number;
    zip: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OutletMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OutletMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OutletCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlet to aggregate.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned outlets
     **/
    _count?: true | OutletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OutletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OutletMaxAggregateInputType;
  };

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
    [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>;
  };

  export type outletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outletWhereInput;
    orderBy?: outletOrderByWithAggregationInput | outletOrderByWithAggregationInput[];
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum;
    having?: outletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OutletCountAggregateInputType | true;
    _min?: OutletMinAggregateInputType;
    _max?: OutletMaxAggregateInputType;
  };

  export type OutletGroupByOutputType = {
    id: string;
    name: string;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OutletCountAggregateOutputType | null;
    _min: OutletMinAggregateOutputType | null;
    _max: OutletMaxAggregateOutputType | null;
  };

  type GetOutletGroupByPayload<T extends outletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OutletGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
          : GetScalarType<T[P], OutletGroupByOutputType[P]>;
      }
    >
  >;

  export type outletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      product?: boolean | outlet$productArgs<ExtArgs>;
      _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['outlet']
  >;

  export type outletSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type outletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    product?: boolean | outlet$productArgs<ExtArgs>;
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $outletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'outlet';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      product: Prisma.$productPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['outlet']
    >;
    composites: {};
  };

  type outletGetPayload<S extends boolean | null | undefined | outletDefaultArgs> = $Result.GetResult<
    Prisma.$outletPayload,
    S
  >;

  type outletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    outletFindManyArgs,
    'select' | 'include'
  > & {
    select?: OutletCountAggregateInputType | true;
  };

  export interface outletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['outlet']; meta: { name: 'outlet' } };
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {outletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends outletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, outletFindUniqueArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Outlet that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {outletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends outletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends outletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindFirstArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends outletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     *
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const outletWithIdOnly = await prisma.outlet.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends outletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Outlet.
     * @param {outletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     *
     **/
    create<T extends outletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, outletCreateArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Outlets.
     *     @param {outletCreateManyArgs} args - Arguments to create many Outlets.
     *     @example
     *     // Create many Outlets
     *     const outlet = await prisma.outlet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends outletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Outlet.
     * @param {outletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     *
     **/
    delete<T extends outletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, outletDeleteArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Outlet.
     * @param {outletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends outletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpdateArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Outlets.
     * @param {outletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends outletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outletDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends outletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Outlet.
     * @param {outletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     **/
    upsert<T extends outletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, outletUpsertArgs<ExtArgs>>,
    ): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
     **/
    count<T extends outletCountArgs>(
      args?: Subset<T, outletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OutletAggregateArgs>(
      args: Subset<T, OutletAggregateArgs>,
    ): Prisma.PrismaPromise<GetOutletAggregateType<T>>;

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends outletGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: outletGroupByArgs['orderBy'] }
        : { orderBy?: outletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, outletGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the outlet model
     */
    readonly fields: outletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__outletClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    product<T extends outlet$productArgs<ExtArgs> = {}>(
      args?: Subset<T, outlet$productArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the outlet model
   */
  interface outletFieldRefs {
    readonly id: FieldRef<'outlet', 'String'>;
    readonly name: FieldRef<'outlet', 'String'>;
    readonly address: FieldRef<'outlet', 'String'>;
    readonly city: FieldRef<'outlet', 'String'>;
    readonly state: FieldRef<'outlet', 'String'>;
    readonly zip: FieldRef<'outlet', 'String'>;
    readonly company_id: FieldRef<'outlet', 'String'>;
    readonly created_at: FieldRef<'outlet', 'DateTime'>;
    readonly updated_at: FieldRef<'outlet', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * outlet findUnique
   */
  export type outletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet findUniqueOrThrow
   */
  export type outletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet findFirst
   */
  export type outletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet findFirstOrThrow
   */
  export type outletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet findMany
   */
  export type outletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter, which outlets to fetch.
     */
    where?: outletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing outlets.
     */
    cursor?: outletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` outlets.
     */
    skip?: number;
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[];
  };

  /**
   * outlet create
   */
  export type outletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The data needed to create a outlet.
     */
    data: XOR<outletCreateInput, outletUncheckedCreateInput>;
  };

  /**
   * outlet createMany
   */
  export type outletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many outlets.
     */
    data: outletCreateManyInput | outletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * outlet update
   */
  export type outletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The data needed to update a outlet.
     */
    data: XOR<outletUpdateInput, outletUncheckedUpdateInput>;
    /**
     * Choose, which outlet to update.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet updateMany
   */
  export type outletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update outlets.
     */
    data: XOR<outletUpdateManyMutationInput, outletUncheckedUpdateManyInput>;
    /**
     * Filter which outlets to update
     */
    where?: outletWhereInput;
  };

  /**
   * outlet upsert
   */
  export type outletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * The filter to search for the outlet to update in case it exists.
     */
    where: outletWhereUniqueInput;
    /**
     * In case the outlet found by the `where` argument doesn't exist, create a new outlet with this data.
     */
    create: XOR<outletCreateInput, outletUncheckedCreateInput>;
    /**
     * In case the outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<outletUpdateInput, outletUncheckedUpdateInput>;
  };

  /**
   * outlet delete
   */
  export type outletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
    /**
     * Filter which outlet to delete.
     */
    where: outletWhereUniqueInput;
  };

  /**
   * outlet deleteMany
   */
  export type outletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlets to delete
     */
    where?: outletWhereInput;
  };

  /**
   * outlet.product
   */
  export type outlet$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    where?: productWhereInput;
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    cursor?: productWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * outlet without action
   */
  export type outletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outletInclude<ExtArgs> | null;
  };

  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    outlet_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    outlet_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    quantity: number;
    outlet_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    outlet_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput;
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: productScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price: number | null;
    quantity: number | null;
    outlet_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
          : GetScalarType<T[P], ProductGroupByOutputType[P]>;
      }
    >
  >;

  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
      outlet_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      outlet?: boolean | outletDefaultArgs<ExtArgs>;
      rental?: boolean | product$rentalArgs<ExtArgs>;
      sales?: boolean | product$salesArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type productSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    outlet_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | outletDefaultArgs<ExtArgs>;
    rental?: boolean | product$rentalArgs<ExtArgs>;
    sales?: boolean | product$salesArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'product';
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs>;
      rental: Prisma.$rentalPayload<ExtArgs>[];
      sales: Prisma.$salesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price: number | null;
        quantity: number | null;
        outlet_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<
    Prisma.$productPayload,
    S
  >;

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    productFindManyArgs,
    'select' | 'include'
  > & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product']; meta: { name: 'product' } };
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends productFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends productFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends productFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends productFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     **/
    create<T extends productCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productCreateArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Products.
     *     @param {productCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends productCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     **/
    delete<T extends productDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productDeleteArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends productUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends productDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends productUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     **/
    upsert<T extends productUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productUpsertArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the product model
     */
    readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    outlet<T extends outletDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, outletDefaultArgs<ExtArgs>>,
    ): Prisma__outletClient<
      $Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    rental<T extends product$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, product$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    sales<T extends product$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, product$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<'product', 'String'>;
    readonly name: FieldRef<'product', 'String'>;
    readonly description: FieldRef<'product', 'String'>;
    readonly price: FieldRef<'product', 'Int'>;
    readonly quantity: FieldRef<'product', 'Int'>;
    readonly outlet_id: FieldRef<'product', 'String'>;
    readonly created_at: FieldRef<'product', 'DateTime'>;
    readonly updated_at: FieldRef<'product', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>;
  };

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>;
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>;
    /**
     * Filter which products to update
     */
    where?: productWhereInput;
  };

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput;
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>;
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>;
  };

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput;
  };

  /**
   * product.rental
   */
  export type product$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * product.sales
   */
  export type product$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
  };

  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  export type RentalAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalSumAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: string | null;
    rental_start: Date | null;
    rental_end: Date | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: string | null;
    rental_start: Date | null;
    rental_end: Date | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalCountAggregateOutputType = {
    id: number;
    user_id: number;
    product_id: number;
    rental_start: number;
    rental_end: number;
    total_price: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RentalAvgAggregateInputType = {
    total_price?: true;
  };

  export type RentalSumAggregateInputType = {
    total_price?: true;
  };

  export type RentalMinAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    rental_start?: true;
    rental_end?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    rental_start?: true;
    rental_end?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalCountAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    rental_start?: true;
    rental_end?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rentals
     **/
    _count?: true | RentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RentalMaxAggregateInputType;
  };

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>;
  };

  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[];
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum;
    having?: rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
  };

  export type RentalGroupByOutputType = {
    id: string;
    user_id: string;
    product_id: string;
    rental_start: Date | null;
    rental_end: Date | null;
    total_price: number | null;
    status: string | null;
    created_at: Date;
    updated_at: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RentalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
          : GetScalarType<T[P], RentalGroupByOutputType[P]>;
      }
    >
  >;

  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      product_id?: boolean;
      rental_start?: boolean;
      rental_end?: boolean;
      total_price?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      product?: boolean | productDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rental']
  >;

  export type rentalSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    rental_start?: boolean;
    rental_end?: boolean;
    total_price?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'rental';
    objects: {
      product: Prisma.$productPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        product_id: string;
        rental_start: Date | null;
        rental_end: Date | null;
        total_price: number | null;
        status: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['rental']
    >;
    composites: {};
  };

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<
    Prisma.$rentalPayload,
    S
  >;

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    rentalFindManyArgs,
    'select' | 'include'
  > & {
    select?: RentalCountAggregateInputType | true;
  };

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental']; meta: { name: 'rental' } };
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends rentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends rentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     *
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends rentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     *
     **/
    create<T extends rentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalCreateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends rentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     *
     **/
    delete<T extends rentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends rentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends rentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends rentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     **/
    upsert<T extends rentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
     **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RentalAggregateArgs>(
      args: Subset<T, RentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetRentalAggregateType<T>>;

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rental model
     */
    readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, productDefaultArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly id: FieldRef<'rental', 'String'>;
    readonly user_id: FieldRef<'rental', 'String'>;
    readonly product_id: FieldRef<'rental', 'String'>;
    readonly rental_start: FieldRef<'rental', 'DateTime'>;
    readonly rental_end: FieldRef<'rental', 'DateTime'>;
    readonly total_price: FieldRef<'rental', 'Int'>;
    readonly status: FieldRef<'rental', 'String'>;
    readonly created_at: FieldRef<'rental', 'DateTime'>;
    readonly updated_at: FieldRef<'rental', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
  };

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>;
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput;
  };

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput;
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
  };

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput;
  };

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
  };

  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  export type SalesAvgAggregateOutputType = {
    quantity: number | null;
    total_price: number | null;
  };

  export type SalesSumAggregateOutputType = {
    quantity: number | null;
    total_price: number | null;
  };

  export type SalesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: string | null;
    quantity: number | null;
    total_price: number | null;
    sale_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: string | null;
    quantity: number | null;
    total_price: number | null;
    sale_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesCountAggregateOutputType = {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    sale_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SalesAvgAggregateInputType = {
    quantity?: true;
    total_price?: true;
  };

  export type SalesSumAggregateInputType = {
    quantity?: true;
    total_price?: true;
  };

  export type SalesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    quantity?: true;
    total_price?: true;
    sale_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    quantity?: true;
    total_price?: true;
    sale_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    quantity?: true;
    total_price?: true;
    sale_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sales
     **/
    _count?: true | SalesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SalesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SalesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SalesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SalesMaxAggregateInputType;
  };

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
    [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>;
  };

  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput;
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[];
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum;
    having?: salesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesCountAggregateInputType | true;
    _avg?: SalesAvgAggregateInputType;
    _sum?: SalesSumAggregateInputType;
    _min?: SalesMinAggregateInputType;
    _max?: SalesMaxAggregateInputType;
  };

  export type SalesGroupByOutputType = {
    id: string;
    user_id: string;
    product_id: string;
    quantity: number | null;
    total_price: number | null;
    sale_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SalesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
          : GetScalarType<T[P], SalesGroupByOutputType[P]>;
      }
    >
  >;

  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      product_id?: boolean;
      quantity?: boolean;
      total_price?: boolean;
      sale_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      product?: boolean | productDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['sales']
  >;

  export type salesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    total_price?: boolean;
    sale_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sales';
    objects: {
      product: Prisma.$productPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        product_id: string;
        quantity: number | null;
        total_price: number | null;
        sale_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sales']
    >;
    composites: {};
  };

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<
    Prisma.$salesPayload,
    S
  >;

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    salesFindManyArgs,
    'select' | 'include'
  > & {
    select?: SalesCountAggregateInputType | true;
  };

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales']; meta: { name: 'sales' } };
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends salesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Sales that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends salesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     *
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends salesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     *
     **/
    create<T extends salesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, salesCreateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sales.
     *     @param {salesCreateManyArgs} args - Arguments to create many Sales.
     *     @example
     *     // Create many Sales
     *     const sales = await prisma.sales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends salesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     *
     **/
    delete<T extends salesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, salesDeleteArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends salesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends salesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends salesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     **/
    upsert<T extends salesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpsertArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
     **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SalesAggregateArgs>(
      args: Subset<T, SalesAggregateArgs>,
    ): Prisma.PrismaPromise<GetSalesAggregateType<T>>;

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sales model
     */
    readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, productDefaultArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<'sales', 'String'>;
    readonly user_id: FieldRef<'sales', 'String'>;
    readonly product_id: FieldRef<'sales', 'String'>;
    readonly quantity: FieldRef<'sales', 'Int'>;
    readonly total_price: FieldRef<'sales', 'Int'>;
    readonly sale_date: FieldRef<'sales', 'DateTime'>;
    readonly created_at: FieldRef<'sales', 'DateTime'>;
    readonly updated_at: FieldRef<'sales', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>;
  };

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>;
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput;
  };

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput;
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>;
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
  };

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput;
  };

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      rental?: boolean | user$rentalArgs<ExtArgs>;
      sales?: boolean | user$salesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    rental?: boolean | user$rentalArgs<ExtArgs>;
    sales?: boolean | user$salesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      rental: Prisma.$rentalPayload<ExtArgs>[];
      sales: Prisma.$salesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    rental<T extends user$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    sales<T extends user$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, user$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * user.sales
   */
  export type user$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip: 'zip';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const OutletScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    city: 'city';
    state: 'state';
    zip: 'zip';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    quantity: 'quantity';
    outlet_id: 'outlet_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const RentalScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    product_id: 'product_id';
    rental_start: 'rental_start';
    rental_end: 'rental_end';
    total_price: 'total_price';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];

  export const SalesScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    product_id: 'product_id';
    quantity: 'quantity';
    total_price: 'total_price';
    sale_date: 'sale_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    outlet?: OutletListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    outlet?: outletOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      outlet?: OutletListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type outletWhereInput = {
    AND?: outletWhereInput | outletWhereInput[];
    OR?: outletWhereInput[];
    NOT?: outletWhereInput | outletWhereInput[];
    id?: UuidFilter<'outlet'> | string;
    name?: StringFilter<'outlet'> | string;
    address?: StringNullableFilter<'outlet'> | string | null;
    city?: StringNullableFilter<'outlet'> | string | null;
    state?: StringNullableFilter<'outlet'> | string | null;
    zip?: StringNullableFilter<'outlet'> | string | null;
    company_id?: UuidFilter<'outlet'> | string;
    created_at?: DateTimeFilter<'outlet'> | Date | string;
    updated_at?: DateTimeFilter<'outlet'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    product?: ProductListRelationFilter;
  };

  export type outletOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    product?: productOrderByRelationAggregateInput;
  };

  export type outletWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: outletWhereInput | outletWhereInput[];
      OR?: outletWhereInput[];
      NOT?: outletWhereInput | outletWhereInput[];
      name?: StringFilter<'outlet'> | string;
      address?: StringNullableFilter<'outlet'> | string | null;
      city?: StringNullableFilter<'outlet'> | string | null;
      state?: StringNullableFilter<'outlet'> | string | null;
      zip?: StringNullableFilter<'outlet'> | string | null;
      company_id?: UuidFilter<'outlet'> | string;
      created_at?: DateTimeFilter<'outlet'> | Date | string;
      updated_at?: DateTimeFilter<'outlet'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      product?: ProductListRelationFilter;
    },
    'id'
  >;

  export type outletOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: outletCountOrderByAggregateInput;
    _max?: outletMaxOrderByAggregateInput;
    _min?: outletMinOrderByAggregateInput;
  };

  export type outletScalarWhereWithAggregatesInput = {
    AND?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[];
    OR?: outletScalarWhereWithAggregatesInput[];
    NOT?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'outlet'> | string;
    name?: StringWithAggregatesFilter<'outlet'> | string;
    address?: StringNullableWithAggregatesFilter<'outlet'> | string | null;
    city?: StringNullableWithAggregatesFilter<'outlet'> | string | null;
    state?: StringNullableWithAggregatesFilter<'outlet'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'outlet'> | string | null;
    company_id?: UuidWithAggregatesFilter<'outlet'> | string;
    created_at?: DateTimeWithAggregatesFilter<'outlet'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'outlet'> | Date | string;
  };

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[];
    OR?: productWhereInput[];
    NOT?: productWhereInput | productWhereInput[];
    id?: UuidFilter<'product'> | string;
    name?: StringFilter<'product'> | string;
    description?: StringNullableFilter<'product'> | string | null;
    price?: IntNullableFilter<'product'> | number | null;
    quantity?: IntNullableFilter<'product'> | number | null;
    outlet_id?: UuidFilter<'product'> | string;
    created_at?: DateTimeFilter<'product'> | Date | string;
    updated_at?: DateTimeFilter<'product'> | Date | string;
    outlet?: XOR<OutletRelationFilter, outletWhereInput>;
    rental?: RentalListRelationFilter;
    sales?: SalesListRelationFilter;
  };

  export type productOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    outlet?: outletOrderByWithRelationInput;
    rental?: rentalOrderByRelationAggregateInput;
    sales?: salesOrderByRelationAggregateInput;
  };

  export type productWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: productWhereInput | productWhereInput[];
      OR?: productWhereInput[];
      NOT?: productWhereInput | productWhereInput[];
      name?: StringFilter<'product'> | string;
      description?: StringNullableFilter<'product'> | string | null;
      price?: IntNullableFilter<'product'> | number | null;
      quantity?: IntNullableFilter<'product'> | number | null;
      outlet_id?: UuidFilter<'product'> | string;
      created_at?: DateTimeFilter<'product'> | Date | string;
      updated_at?: DateTimeFilter<'product'> | Date | string;
      outlet?: XOR<OutletRelationFilter, outletWhereInput>;
      rental?: RentalListRelationFilter;
      sales?: SalesListRelationFilter;
    },
    'id'
  >;

  export type productOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: productCountOrderByAggregateInput;
    _avg?: productAvgOrderByAggregateInput;
    _max?: productMaxOrderByAggregateInput;
    _min?: productMinOrderByAggregateInput;
    _sum?: productSumOrderByAggregateInput;
  };

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[];
    OR?: productScalarWhereWithAggregatesInput[];
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'product'> | string;
    name?: StringWithAggregatesFilter<'product'> | string;
    description?: StringNullableWithAggregatesFilter<'product'> | string | null;
    price?: IntNullableWithAggregatesFilter<'product'> | number | null;
    quantity?: IntNullableWithAggregatesFilter<'product'> | number | null;
    outlet_id?: UuidWithAggregatesFilter<'product'> | string;
    created_at?: DateTimeWithAggregatesFilter<'product'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'product'> | Date | string;
  };

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[];
    OR?: rentalWhereInput[];
    NOT?: rentalWhereInput | rentalWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    product_id?: UuidFilter<'rental'> | string;
    rental_start?: DateTimeNullableFilter<'rental'> | Date | string | null;
    rental_end?: DateTimeNullableFilter<'rental'> | Date | string | null;
    total_price?: IntNullableFilter<'rental'> | number | null;
    status?: StringNullableFilter<'rental'> | string | null;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
    product?: XOR<ProductRelationFilter, productWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type rentalOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    rental_start?: SortOrderInput | SortOrder;
    rental_end?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    product?: productOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type rentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: rentalWhereInput | rentalWhereInput[];
      OR?: rentalWhereInput[];
      NOT?: rentalWhereInput | rentalWhereInput[];
      user_id?: UuidFilter<'rental'> | string;
      product_id?: UuidFilter<'rental'> | string;
      rental_start?: DateTimeNullableFilter<'rental'> | Date | string | null;
      rental_end?: DateTimeNullableFilter<'rental'> | Date | string | null;
      total_price?: IntNullableFilter<'rental'> | number | null;
      status?: StringNullableFilter<'rental'> | string | null;
      created_at?: DateTimeFilter<'rental'> | Date | string;
      updated_at?: DateTimeFilter<'rental'> | Date | string;
      product?: XOR<ProductRelationFilter, productWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type rentalOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    rental_start?: SortOrderInput | SortOrder;
    rental_end?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: rentalCountOrderByAggregateInput;
    _avg?: rentalAvgOrderByAggregateInput;
    _max?: rentalMaxOrderByAggregateInput;
    _min?: rentalMinOrderByAggregateInput;
    _sum?: rentalSumOrderByAggregateInput;
  };

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    OR?: rentalScalarWhereWithAggregatesInput[];
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'rental'> | string;
    user_id?: UuidWithAggregatesFilter<'rental'> | string;
    product_id?: UuidWithAggregatesFilter<'rental'> | string;
    rental_start?: DateTimeNullableWithAggregatesFilter<'rental'> | Date | string | null;
    rental_end?: DateTimeNullableWithAggregatesFilter<'rental'> | Date | string | null;
    total_price?: IntNullableWithAggregatesFilter<'rental'> | number | null;
    status?: StringNullableWithAggregatesFilter<'rental'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
  };

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[];
    OR?: salesWhereInput[];
    NOT?: salesWhereInput | salesWhereInput[];
    id?: UuidFilter<'sales'> | string;
    user_id?: UuidFilter<'sales'> | string;
    product_id?: UuidFilter<'sales'> | string;
    quantity?: IntNullableFilter<'sales'> | number | null;
    total_price?: IntNullableFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
    product?: XOR<ProductRelationFilter, productWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type salesOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    sale_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    product?: productOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type salesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: salesWhereInput | salesWhereInput[];
      OR?: salesWhereInput[];
      NOT?: salesWhereInput | salesWhereInput[];
      user_id?: UuidFilter<'sales'> | string;
      product_id?: UuidFilter<'sales'> | string;
      quantity?: IntNullableFilter<'sales'> | number | null;
      total_price?: IntNullableFilter<'sales'> | number | null;
      sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
      created_at?: DateTimeFilter<'sales'> | Date | string;
      updated_at?: DateTimeFilter<'sales'> | Date | string;
      product?: XOR<ProductRelationFilter, productWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    sale_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: salesCountOrderByAggregateInput;
    _avg?: salesAvgOrderByAggregateInput;
    _max?: salesMaxOrderByAggregateInput;
    _min?: salesMinOrderByAggregateInput;
    _sum?: salesSumOrderByAggregateInput;
  };

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    OR?: salesScalarWhereWithAggregatesInput[];
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sales'> | string;
    user_id?: UuidWithAggregatesFilter<'sales'> | string;
    product_id?: UuidWithAggregatesFilter<'sales'> | string;
    quantity?: IntNullableWithAggregatesFilter<'sales'> | number | null;
    total_price?: IntNullableWithAggregatesFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableWithAggregatesFilter<'sales'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    rental?: RentalListRelationFilter;
    sales?: SalesListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    rental?: rentalOrderByRelationAggregateInput;
    sales?: salesOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      rental?: RentalListRelationFilter;
      sales?: SalesListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    outlet?: outletCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    outlet?: outletUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    outlet?: outletUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    outlet?: outletUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type outletCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOutletInput;
    product?: productCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    product?: productUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOutletNestedInput;
    product?: productUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type outletCreateManyInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type outletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type outletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutProductInput;
    rental?: rentalCreateNestedManyWithoutProductInput;
    sales?: salesCreateNestedManyWithoutProductInput;
  };

  export type productUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutProductInput;
    sales?: salesUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutProductNestedInput;
    rental?: rentalUpdateManyWithoutProductNestedInput;
    sales?: salesUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutProductNestedInput;
    sales?: salesUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type productCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateInput = {
    id?: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateInput = {
    id?: string;
    user_id: string;
    product_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyInput = {
    id?: string;
    user_id: string;
    product_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesCreateInput = {
    id?: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutSalesInput;
    user: userCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    product_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutSalesNestedInput;
    user?: userUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesCreateManyInput = {
    id?: string;
    user_id: string;
    product_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type OutletListRelationFilter = {
    every?: outletWhereInput;
    some?: outletWhereInput;
    none?: outletWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type outletOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type ProductListRelationFilter = {
    every?: productWhereInput;
    some?: productWhereInput;
    none?: productWhereInput;
  };

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type outletCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type outletMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type outletMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type OutletRelationFilter = {
    is?: outletWhereInput;
    isNot?: outletWhereInput;
  };

  export type RentalListRelationFilter = {
    every?: rentalWhereInput;
    some?: rentalWhereInput;
    none?: rentalWhereInput;
  };

  export type SalesListRelationFilter = {
    every?: salesWhereInput;
    some?: salesWhereInput;
    none?: salesWhereInput;
  };

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type productCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    outlet_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ProductRelationFilter = {
    is?: productWhereInput;
    isNot?: productWhereInput;
  };

  export type rentalCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    rental_start?: SortOrder;
    rental_end?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type rentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    rental_start?: SortOrder;
    rental_end?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    rental_start?: SortOrder;
    rental_end?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    sale_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    total_price?: SortOrder;
  };

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    sale_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    total_price?: SortOrder;
    sale_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesSumOrderByAggregateInput = {
    quantity?: SortOrder;
    total_price?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type outletCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
  };

  export type outletUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type outletUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    upsert?: outletUpsertWithWhereUniqueWithoutCompanyInput | outletUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    set?: outletWhereUniqueInput | outletWhereUniqueInput[];
    disconnect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    delete?: outletWhereUniqueInput | outletWhereUniqueInput[];
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    update?: outletUpdateWithWhereUniqueWithoutCompanyInput | outletUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: outletUpdateManyWithWhereWithoutCompanyInput | outletUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: outletScalarWhereInput | outletScalarWhereInput[];
  };

  export type outletUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>
      | outletCreateWithoutCompanyInput[]
      | outletUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: outletCreateOrConnectWithoutCompanyInput | outletCreateOrConnectWithoutCompanyInput[];
    upsert?: outletUpsertWithWhereUniqueWithoutCompanyInput | outletUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: outletCreateManyCompanyInputEnvelope;
    set?: outletWhereUniqueInput | outletWhereUniqueInput[];
    disconnect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    delete?: outletWhereUniqueInput | outletWhereUniqueInput[];
    connect?: outletWhereUniqueInput | outletWhereUniqueInput[];
    update?: outletUpdateWithWhereUniqueWithoutCompanyInput | outletUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: outletUpdateManyWithWhereWithoutCompanyInput | outletUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: outletScalarWhereInput | outletScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutOutletInput = {
    create?: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOutletInput;
    connect?: companyWhereUniqueInput;
  };

  export type productCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>
      | productCreateWithoutOutletInput[]
      | productUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: productCreateOrConnectWithoutOutletInput | productCreateOrConnectWithoutOutletInput[];
    createMany?: productCreateManyOutletInputEnvelope;
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
  };

  export type productUncheckedCreateNestedManyWithoutOutletInput = {
    create?:
      | XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>
      | productCreateWithoutOutletInput[]
      | productUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: productCreateOrConnectWithoutOutletInput | productCreateOrConnectWithoutOutletInput[];
    createMany?: productCreateManyOutletInputEnvelope;
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutOutletNestedInput = {
    create?: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOutletInput;
    upsert?: companyUpsertWithoutOutletInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutOutletInput, companyUpdateWithoutOutletInput>,
      companyUncheckedUpdateWithoutOutletInput
    >;
  };

  export type productUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>
      | productCreateWithoutOutletInput[]
      | productUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: productCreateOrConnectWithoutOutletInput | productCreateOrConnectWithoutOutletInput[];
    upsert?: productUpsertWithWhereUniqueWithoutOutletInput | productUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: productCreateManyOutletInputEnvelope;
    set?: productWhereUniqueInput | productWhereUniqueInput[];
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[];
    delete?: productWhereUniqueInput | productWhereUniqueInput[];
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
    update?: productUpdateWithWhereUniqueWithoutOutletInput | productUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?: productUpdateManyWithWhereWithoutOutletInput | productUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: productScalarWhereInput | productScalarWhereInput[];
  };

  export type productUncheckedUpdateManyWithoutOutletNestedInput = {
    create?:
      | XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>
      | productCreateWithoutOutletInput[]
      | productUncheckedCreateWithoutOutletInput[];
    connectOrCreate?: productCreateOrConnectWithoutOutletInput | productCreateOrConnectWithoutOutletInput[];
    upsert?: productUpsertWithWhereUniqueWithoutOutletInput | productUpsertWithWhereUniqueWithoutOutletInput[];
    createMany?: productCreateManyOutletInputEnvelope;
    set?: productWhereUniqueInput | productWhereUniqueInput[];
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[];
    delete?: productWhereUniqueInput | productWhereUniqueInput[];
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
    update?: productUpdateWithWhereUniqueWithoutOutletInput | productUpdateWithWhereUniqueWithoutOutletInput[];
    updateMany?: productUpdateManyWithWhereWithoutOutletInput | productUpdateManyWithWhereWithoutOutletInput[];
    deleteMany?: productScalarWhereInput | productScalarWhereInput[];
  };

  export type outletCreateNestedOneWithoutProductInput = {
    create?: XOR<outletCreateWithoutProductInput, outletUncheckedCreateWithoutProductInput>;
    connectOrCreate?: outletCreateOrConnectWithoutProductInput;
    connect?: outletWhereUniqueInput;
  };

  export type rentalCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>
      | rentalCreateWithoutProductInput[]
      | rentalUncheckedCreateWithoutProductInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutProductInput | rentalCreateOrConnectWithoutProductInput[];
    createMany?: rentalCreateManyProductInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type salesCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>
      | salesCreateWithoutProductInput[]
      | salesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: salesCreateOrConnectWithoutProductInput | salesCreateOrConnectWithoutProductInput[];
    createMany?: salesCreateManyProductInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>
      | rentalCreateWithoutProductInput[]
      | rentalUncheckedCreateWithoutProductInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutProductInput | rentalCreateOrConnectWithoutProductInput[];
    createMany?: rentalCreateManyProductInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>
      | salesCreateWithoutProductInput[]
      | salesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: salesCreateOrConnectWithoutProductInput | salesCreateOrConnectWithoutProductInput[];
    createMany?: salesCreateManyProductInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type outletUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<outletCreateWithoutProductInput, outletUncheckedCreateWithoutProductInput>;
    connectOrCreate?: outletCreateOrConnectWithoutProductInput;
    upsert?: outletUpsertWithoutProductInput;
    connect?: outletWhereUniqueInput;
    update?: XOR<
      XOR<outletUpdateToOneWithWhereWithoutProductInput, outletUpdateWithoutProductInput>,
      outletUncheckedUpdateWithoutProductInput
    >;
  };

  export type rentalUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>
      | rentalCreateWithoutProductInput[]
      | rentalUncheckedCreateWithoutProductInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutProductInput | rentalCreateOrConnectWithoutProductInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutProductInput | rentalUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: rentalCreateManyProductInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutProductInput | rentalUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutProductInput | rentalUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type salesUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>
      | salesCreateWithoutProductInput[]
      | salesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: salesCreateOrConnectWithoutProductInput | salesCreateOrConnectWithoutProductInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutProductInput | salesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: salesCreateManyProductInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutProductInput | salesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: salesUpdateManyWithWhereWithoutProductInput | salesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>
      | rentalCreateWithoutProductInput[]
      | rentalUncheckedCreateWithoutProductInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutProductInput | rentalCreateOrConnectWithoutProductInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutProductInput | rentalUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: rentalCreateManyProductInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutProductInput | rentalUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutProductInput | rentalUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>
      | salesCreateWithoutProductInput[]
      | salesUncheckedCreateWithoutProductInput[];
    connectOrCreate?: salesCreateOrConnectWithoutProductInput | salesCreateOrConnectWithoutProductInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutProductInput | salesUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: salesCreateManyProductInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutProductInput | salesUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: salesUpdateManyWithWhereWithoutProductInput | salesUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type productCreateNestedOneWithoutRentalInput = {
    create?: XOR<productCreateWithoutRentalInput, productUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: productCreateOrConnectWithoutRentalInput;
    connect?: productWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type productUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<productCreateWithoutRentalInput, productUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: productCreateOrConnectWithoutRentalInput;
    upsert?: productUpsertWithoutRentalInput;
    connect?: productWhereUniqueInput;
    update?: XOR<
      XOR<productUpdateToOneWithWhereWithoutRentalInput, productUpdateWithoutRentalInput>,
      productUncheckedUpdateWithoutRentalInput
    >;
  };

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    upsert?: userUpsertWithoutRentalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>,
      userUncheckedUpdateWithoutRentalInput
    >;
  };

  export type productCreateNestedOneWithoutSalesInput = {
    create?: XOR<productCreateWithoutSalesInput, productUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: productCreateOrConnectWithoutSalesInput;
    connect?: productWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutSalesInput = {
    create?: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: userCreateOrConnectWithoutSalesInput;
    connect?: userWhereUniqueInput;
  };

  export type productUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<productCreateWithoutSalesInput, productUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: productCreateOrConnectWithoutSalesInput;
    upsert?: productUpsertWithoutSalesInput;
    connect?: productWhereUniqueInput;
    update?: XOR<
      XOR<productUpdateToOneWithWhereWithoutSalesInput, productUpdateWithoutSalesInput>,
      productUncheckedUpdateWithoutSalesInput
    >;
  };

  export type userUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: userCreateOrConnectWithoutSalesInput;
    upsert?: userUpsertWithoutSalesInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSalesInput, userUpdateWithoutSalesInput>,
      userUncheckedUpdateWithoutSalesInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type rentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type salesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type salesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type outletCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product?: productCreateNestedManyWithoutOutletInput;
  };

  export type outletUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product?: productUncheckedCreateNestedManyWithoutOutletInput;
  };

  export type outletCreateOrConnectWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    create: XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>;
  };

  export type outletCreateManyCompanyInputEnvelope = {
    data: outletCreateManyCompanyInput | outletCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type outletUpsertWithWhereUniqueWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    update: XOR<outletUpdateWithoutCompanyInput, outletUncheckedUpdateWithoutCompanyInput>;
    create: XOR<outletCreateWithoutCompanyInput, outletUncheckedCreateWithoutCompanyInput>;
  };

  export type outletUpdateWithWhereUniqueWithoutCompanyInput = {
    where: outletWhereUniqueInput;
    data: XOR<outletUpdateWithoutCompanyInput, outletUncheckedUpdateWithoutCompanyInput>;
  };

  export type outletUpdateManyWithWhereWithoutCompanyInput = {
    where: outletScalarWhereInput;
    data: XOR<outletUpdateManyMutationInput, outletUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type outletScalarWhereInput = {
    AND?: outletScalarWhereInput | outletScalarWhereInput[];
    OR?: outletScalarWhereInput[];
    NOT?: outletScalarWhereInput | outletScalarWhereInput[];
    id?: UuidFilter<'outlet'> | string;
    name?: StringFilter<'outlet'> | string;
    address?: StringNullableFilter<'outlet'> | string | null;
    city?: StringNullableFilter<'outlet'> | string | null;
    state?: StringNullableFilter<'outlet'> | string | null;
    zip?: StringNullableFilter<'outlet'> | string | null;
    company_id?: UuidFilter<'outlet'> | string;
    created_at?: DateTimeFilter<'outlet'> | Date | string;
    updated_at?: DateTimeFilter<'outlet'> | Date | string;
  };

  export type companyCreateWithoutOutletInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutOutletInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutOutletInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
  };

  export type productCreateWithoutOutletInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutProductInput;
    sales?: salesCreateNestedManyWithoutProductInput;
  };

  export type productUncheckedCreateWithoutOutletInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutProductInput;
    sales?: salesUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutOutletInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>;
  };

  export type productCreateManyOutletInputEnvelope = {
    data: productCreateManyOutletInput | productCreateManyOutletInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutOutletInput = {
    update: XOR<companyUpdateWithoutOutletInput, companyUncheckedUpdateWithoutOutletInput>;
    create: XOR<companyCreateWithoutOutletInput, companyUncheckedCreateWithoutOutletInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutOutletInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutOutletInput, companyUncheckedUpdateWithoutOutletInput>;
  };

  export type companyUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type productUpsertWithWhereUniqueWithoutOutletInput = {
    where: productWhereUniqueInput;
    update: XOR<productUpdateWithoutOutletInput, productUncheckedUpdateWithoutOutletInput>;
    create: XOR<productCreateWithoutOutletInput, productUncheckedCreateWithoutOutletInput>;
  };

  export type productUpdateWithWhereUniqueWithoutOutletInput = {
    where: productWhereUniqueInput;
    data: XOR<productUpdateWithoutOutletInput, productUncheckedUpdateWithoutOutletInput>;
  };

  export type productUpdateManyWithWhereWithoutOutletInput = {
    where: productScalarWhereInput;
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutOutletInput>;
  };

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[];
    OR?: productScalarWhereInput[];
    NOT?: productScalarWhereInput | productScalarWhereInput[];
    id?: UuidFilter<'product'> | string;
    name?: StringFilter<'product'> | string;
    description?: StringNullableFilter<'product'> | string | null;
    price?: IntNullableFilter<'product'> | number | null;
    quantity?: IntNullableFilter<'product'> | number | null;
    outlet_id?: UuidFilter<'product'> | string;
    created_at?: DateTimeFilter<'product'> | Date | string;
    updated_at?: DateTimeFilter<'product'> | Date | string;
  };

  export type outletCreateWithoutProductInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOutletInput;
  };

  export type outletUncheckedCreateWithoutProductInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type outletCreateOrConnectWithoutProductInput = {
    where: outletWhereUniqueInput;
    create: XOR<outletCreateWithoutProductInput, outletUncheckedCreateWithoutProductInput>;
  };

  export type rentalCreateWithoutProductInput = {
    id?: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutProductInput = {
    id?: string;
    user_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutProductInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>;
  };

  export type rentalCreateManyProductInputEnvelope = {
    data: rentalCreateManyProductInput | rentalCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type salesCreateWithoutProductInput = {
    id?: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutProductInput = {
    id?: string;
    user_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutProductInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>;
  };

  export type salesCreateManyProductInputEnvelope = {
    data: salesCreateManyProductInput | salesCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type outletUpsertWithoutProductInput = {
    update: XOR<outletUpdateWithoutProductInput, outletUncheckedUpdateWithoutProductInput>;
    create: XOR<outletCreateWithoutProductInput, outletUncheckedCreateWithoutProductInput>;
    where?: outletWhereInput;
  };

  export type outletUpdateToOneWithWhereWithoutProductInput = {
    where?: outletWhereInput;
    data: XOR<outletUpdateWithoutProductInput, outletUncheckedUpdateWithoutProductInput>;
  };

  export type outletUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUpsertWithWhereUniqueWithoutProductInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutProductInput, rentalUncheckedUpdateWithoutProductInput>;
    create: XOR<rentalCreateWithoutProductInput, rentalUncheckedCreateWithoutProductInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutProductInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutProductInput, rentalUncheckedUpdateWithoutProductInput>;
  };

  export type rentalUpdateManyWithWhereWithoutProductInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutProductInput>;
  };

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[];
    OR?: rentalScalarWhereInput[];
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    product_id?: UuidFilter<'rental'> | string;
    rental_start?: DateTimeNullableFilter<'rental'> | Date | string | null;
    rental_end?: DateTimeNullableFilter<'rental'> | Date | string | null;
    total_price?: IntNullableFilter<'rental'> | number | null;
    status?: StringNullableFilter<'rental'> | string | null;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
  };

  export type salesUpsertWithWhereUniqueWithoutProductInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutProductInput, salesUncheckedUpdateWithoutProductInput>;
    create: XOR<salesCreateWithoutProductInput, salesUncheckedCreateWithoutProductInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutProductInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutProductInput, salesUncheckedUpdateWithoutProductInput>;
  };

  export type salesUpdateManyWithWhereWithoutProductInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutProductInput>;
  };

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[];
    OR?: salesScalarWhereInput[];
    NOT?: salesScalarWhereInput | salesScalarWhereInput[];
    id?: UuidFilter<'sales'> | string;
    user_id?: UuidFilter<'sales'> | string;
    product_id?: UuidFilter<'sales'> | string;
    quantity?: IntNullableFilter<'sales'> | number | null;
    total_price?: IntNullableFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
  };

  export type productCreateWithoutRentalInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutProductInput;
    sales?: salesCreateNestedManyWithoutProductInput;
  };

  export type productUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutRentalInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutRentalInput, productUncheckedCreateWithoutRentalInput>;
  };

  export type userCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
  };

  export type productUpsertWithoutRentalInput = {
    update: XOR<productUpdateWithoutRentalInput, productUncheckedUpdateWithoutRentalInput>;
    create: XOR<productCreateWithoutRentalInput, productUncheckedCreateWithoutRentalInput>;
    where?: productWhereInput;
  };

  export type productUpdateToOneWithWhereWithoutRentalInput = {
    where?: productWhereInput;
    data: XOR<productUpdateWithoutRentalInput, productUncheckedUpdateWithoutRentalInput>;
  };

  export type productUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutProductNestedInput;
    sales?: salesUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
  };

  export type userUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type productCreateWithoutSalesInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    outlet: outletCreateNestedOneWithoutProductInput;
    rental?: rentalCreateNestedManyWithoutProductInput;
  };

  export type productUncheckedCreateWithoutSalesInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    outlet_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutSalesInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutSalesInput, productUncheckedCreateWithoutSalesInput>;
  };

  export type userCreateWithoutSalesInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSalesInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSalesInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
  };

  export type productUpsertWithoutSalesInput = {
    update: XOR<productUpdateWithoutSalesInput, productUncheckedUpdateWithoutSalesInput>;
    create: XOR<productCreateWithoutSalesInput, productUncheckedCreateWithoutSalesInput>;
    where?: productWhereInput;
  };

  export type productUpdateToOneWithWhereWithoutSalesInput = {
    where?: productWhereInput;
    data: XOR<productUpdateWithoutSalesInput, productUncheckedUpdateWithoutSalesInput>;
  };

  export type productUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    outlet?: outletUpdateOneRequiredWithoutProductNestedInput;
    rental?: rentalUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    outlet_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type userUpsertWithoutSalesInput = {
    update: XOR<userUpdateWithoutSalesInput, userUncheckedUpdateWithoutSalesInput>;
    create: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSalesInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSalesInput, userUncheckedUpdateWithoutSalesInput>;
  };

  export type userUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    outlet?: outletCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    outlet?: outletUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type rentalCreateWithoutUserInput = {
    id?: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutUserInput = {
    id?: string;
    product_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type salesCreateWithoutUserInput = {
    id?: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutUserInput = {
    id?: string;
    product_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutUserInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>;
  };

  export type salesCreateManyUserInputEnvelope = {
    data: salesCreateManyUserInput | salesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
  };

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>;
  };

  export type salesUpsertWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>;
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>;
  };

  export type salesUpdateManyWithWhereWithoutUserInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutUserInput>;
  };

  export type outletCreateManyCompanyInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type outletUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUncheckedUpdateManyWithoutOutletNestedInput;
  };

  export type outletUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productCreateManyOutletInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutProductNestedInput;
    sales?: salesUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutProductNestedInput;
    sales?: salesUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyProductInput = {
    id?: string;
    user_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateManyProductInput = {
    id?: string;
    user_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type rentalCreateManyUserInput = {
    id?: string;
    product_id: string;
    rental_start?: Date | string | null;
    rental_end?: Date | string | null;
    total_price?: number | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateManyUserInput = {
    id?: string;
    product_id: string;
    quantity?: number | null;
    total_price?: number | null;
    sale_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    outlet?: outletUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    outlet?: outletUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type rentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    rental_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rental_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OutletCountOutputTypeDefaultArgs instead
   */
  export type OutletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OutletCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProductCountOutputTypeDefaultArgs instead
   */
  export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProductCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use outletDefaultArgs instead
   */
  export type outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    outletDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use productDefaultArgs instead
   */
  export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    productDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use rentalDefaultArgs instead
   */
  export type rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    rentalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use salesDefaultArgs instead
   */
  export type salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = salesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

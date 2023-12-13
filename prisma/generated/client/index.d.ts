
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ImgFile
 * 
 */
export type ImgFile = $Result.DefaultSelection<Prisma.$ImgFilePayload>
/**
 * Model TypeImg
 * 
 */
export type TypeImg = $Result.DefaultSelection<Prisma.$TypeImgPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.imgFile`: Exposes CRUD operations for the **ImgFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgFiles
    * const imgFiles = await prisma.imgFile.findMany()
    * ```
    */
  get imgFile(): Prisma.ImgFileDelegate<ExtArgs>;

  /**
   * `prisma.typeImg`: Exposes CRUD operations for the **TypeImg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeImgs
    * const typeImgs = await prisma.typeImg.findMany()
    * ```
    */
  get typeImg(): Prisma.TypeImgDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ImgFile: 'ImgFile',
    TypeImg: 'TypeImg'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'imgFile' | 'typeImg'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ImgFile: {
        payload: Prisma.$ImgFilePayload<ExtArgs>
        fields: Prisma.ImgFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgFileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgFileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          findFirst: {
            args: Prisma.ImgFileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgFileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          findMany: {
            args: Prisma.ImgFileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>[]
          }
          create: {
            args: Prisma.ImgFileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          createMany: {
            args: Prisma.ImgFileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImgFileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          update: {
            args: Prisma.ImgFileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          deleteMany: {
            args: Prisma.ImgFileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImgFileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImgFileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImgFilePayload>
          }
          aggregate: {
            args: Prisma.ImgFileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImgFile>
          }
          groupBy: {
            args: Prisma.ImgFileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImgFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgFileCountArgs<ExtArgs>,
            result: $Utils.Optional<ImgFileCountAggregateOutputType> | number
          }
        }
      }
      TypeImg: {
        payload: Prisma.$TypeImgPayload<ExtArgs>
        fields: Prisma.TypeImgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeImgFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeImgFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          findFirst: {
            args: Prisma.TypeImgFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeImgFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          findMany: {
            args: Prisma.TypeImgFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>[]
          }
          create: {
            args: Prisma.TypeImgCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          createMany: {
            args: Prisma.TypeImgCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TypeImgDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          update: {
            args: Prisma.TypeImgUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          deleteMany: {
            args: Prisma.TypeImgDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TypeImgUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TypeImgUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeImgPayload>
          }
          aggregate: {
            args: Prisma.TypeImgAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTypeImg>
          }
          groupBy: {
            args: Prisma.TypeImgGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeImgGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeImgCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeImgCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TypeImgCountOutputType
   */

  export type TypeImgCountOutputType = {
    imgsrc: number
  }

  export type TypeImgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgsrc?: boolean | TypeImgCountOutputTypeCountImgsrcArgs
  }

  // Custom InputTypes

  /**
   * TypeImgCountOutputType without action
   */
  export type TypeImgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImgCountOutputType
     */
    select?: TypeImgCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TypeImgCountOutputType without action
   */
  export type TypeImgCountOutputTypeCountImgsrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgFileWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    department: string | null
    status: number | null
    VoteFor: string | null
    StartDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    department: string | null
    status: number | null
    VoteFor: string | null
    StartDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    name: number
    department: number
    status: number
    VoteFor: number
    StartDate: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    status?: true
  }

  export type UserSumAggregateInputType = {
    status?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    department?: true
    status?: true
    VoteFor?: true
    StartDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    department?: true
    status?: true
    VoteFor?: true
    StartDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    department?: true
    status?: true
    VoteFor?: true
    StartDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    name: string
    department: string
    status: number
    VoteFor: string
    StartDate: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    department?: boolean
    status?: boolean
    VoteFor?: boolean
    StartDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    department?: boolean
    status?: boolean
    VoteFor?: boolean
    StartDate?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      department: string
      status: number
      VoteFor: string
      StartDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly VoteFor: FieldRef<"User", 'String'>
    readonly StartDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model ImgFile
   */

  export type AggregateImgFile = {
    _count: ImgFileCountAggregateOutputType | null
    _avg: ImgFileAvgAggregateOutputType | null
    _sum: ImgFileSumAggregateOutputType | null
    _min: ImgFileMinAggregateOutputType | null
    _max: ImgFileMaxAggregateOutputType | null
  }

  export type ImgFileAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ImgFileSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ImgFileMinAggregateOutputType = {
    id: number | null
    originalName: string | null
    authorId: number | null
    username: string | null
    name: string | null
    department: string | null
  }

  export type ImgFileMaxAggregateOutputType = {
    id: number | null
    originalName: string | null
    authorId: number | null
    username: string | null
    name: string | null
    department: string | null
  }

  export type ImgFileCountAggregateOutputType = {
    id: number
    originalName: number
    authorId: number
    username: number
    name: number
    department: number
    _all: number
  }


  export type ImgFileAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ImgFileSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ImgFileMinAggregateInputType = {
    id?: true
    originalName?: true
    authorId?: true
    username?: true
    name?: true
    department?: true
  }

  export type ImgFileMaxAggregateInputType = {
    id?: true
    originalName?: true
    authorId?: true
    username?: true
    name?: true
    department?: true
  }

  export type ImgFileCountAggregateInputType = {
    id?: true
    originalName?: true
    authorId?: true
    username?: true
    name?: true
    department?: true
    _all?: true
  }

  export type ImgFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgFile to aggregate.
     */
    where?: ImgFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFiles to fetch.
     */
    orderBy?: ImgFileOrderByWithRelationInput | ImgFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgFiles
    **/
    _count?: true | ImgFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImgFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImgFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgFileMaxAggregateInputType
  }

  export type GetImgFileAggregateType<T extends ImgFileAggregateArgs> = {
        [P in keyof T & keyof AggregateImgFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgFile[P]>
      : GetScalarType<T[P], AggregateImgFile[P]>
  }




  export type ImgFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgFileWhereInput
    orderBy?: ImgFileOrderByWithAggregationInput | ImgFileOrderByWithAggregationInput[]
    by: ImgFileScalarFieldEnum[] | ImgFileScalarFieldEnum
    having?: ImgFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgFileCountAggregateInputType | true
    _avg?: ImgFileAvgAggregateInputType
    _sum?: ImgFileSumAggregateInputType
    _min?: ImgFileMinAggregateInputType
    _max?: ImgFileMaxAggregateInputType
  }

  export type ImgFileGroupByOutputType = {
    id: number
    originalName: string
    authorId: number
    username: string
    name: string
    department: string
    _count: ImgFileCountAggregateOutputType | null
    _avg: ImgFileAvgAggregateOutputType | null
    _sum: ImgFileSumAggregateOutputType | null
    _min: ImgFileMinAggregateOutputType | null
    _max: ImgFileMaxAggregateOutputType | null
  }

  type GetImgFileGroupByPayload<T extends ImgFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgFileGroupByOutputType[P]>
            : GetScalarType<T[P], ImgFileGroupByOutputType[P]>
        }
      >
    >


  export type ImgFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    authorId?: boolean
    username?: boolean
    name?: boolean
    department?: boolean
    author?: boolean | TypeImgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imgFile"]>

  export type ImgFileSelectScalar = {
    id?: boolean
    originalName?: boolean
    authorId?: boolean
    username?: boolean
    name?: boolean
    department?: boolean
  }

  export type ImgFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | TypeImgDefaultArgs<ExtArgs>
  }


  export type $ImgFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgFile"
    objects: {
      author: Prisma.$TypeImgPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      originalName: string
      authorId: number
      username: string
      name: string
      department: string
    }, ExtArgs["result"]["imgFile"]>
    composites: {}
  }


  type ImgFileGetPayload<S extends boolean | null | undefined | ImgFileDefaultArgs> = $Result.GetResult<Prisma.$ImgFilePayload, S>

  type ImgFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImgFileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ImgFileCountAggregateInputType | true
    }

  export interface ImgFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgFile'], meta: { name: 'ImgFile' } }
    /**
     * Find zero or one ImgFile that matches the filter.
     * @param {ImgFileFindUniqueArgs} args - Arguments to find a ImgFile
     * @example
     * // Get one ImgFile
     * const imgFile = await prisma.imgFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImgFileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileFindUniqueArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ImgFile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImgFileFindUniqueOrThrowArgs} args - Arguments to find a ImgFile
     * @example
     * // Get one ImgFile
     * const imgFile = await prisma.imgFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImgFileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ImgFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileFindFirstArgs} args - Arguments to find a ImgFile
     * @example
     * // Get one ImgFile
     * const imgFile = await prisma.imgFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImgFileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileFindFirstArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ImgFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileFindFirstOrThrowArgs} args - Arguments to find a ImgFile
     * @example
     * // Get one ImgFile
     * const imgFile = await prisma.imgFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImgFileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ImgFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgFiles
     * const imgFiles = await prisma.imgFile.findMany()
     * 
     * // Get first 10 ImgFiles
     * const imgFiles = await prisma.imgFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgFileWithIdOnly = await prisma.imgFile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImgFileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ImgFile.
     * @param {ImgFileCreateArgs} args - Arguments to create a ImgFile.
     * @example
     * // Create one ImgFile
     * const ImgFile = await prisma.imgFile.create({
     *   data: {
     *     // ... data to create a ImgFile
     *   }
     * })
     * 
    **/
    create<T extends ImgFileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileCreateArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ImgFiles.
     *     @param {ImgFileCreateManyArgs} args - Arguments to create many ImgFiles.
     *     @example
     *     // Create many ImgFiles
     *     const imgFile = await prisma.imgFile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImgFileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImgFile.
     * @param {ImgFileDeleteArgs} args - Arguments to delete one ImgFile.
     * @example
     * // Delete one ImgFile
     * const ImgFile = await prisma.imgFile.delete({
     *   where: {
     *     // ... filter to delete one ImgFile
     *   }
     * })
     * 
    **/
    delete<T extends ImgFileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileDeleteArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ImgFile.
     * @param {ImgFileUpdateArgs} args - Arguments to update one ImgFile.
     * @example
     * // Update one ImgFile
     * const imgFile = await prisma.imgFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImgFileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileUpdateArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ImgFiles.
     * @param {ImgFileDeleteManyArgs} args - Arguments to filter ImgFiles to delete.
     * @example
     * // Delete a few ImgFiles
     * const { count } = await prisma.imgFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImgFileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImgFileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgFiles
     * const imgFile = await prisma.imgFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImgFileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImgFile.
     * @param {ImgFileUpsertArgs} args - Arguments to update or create a ImgFile.
     * @example
     * // Update or create a ImgFile
     * const imgFile = await prisma.imgFile.upsert({
     *   create: {
     *     // ... data to create a ImgFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgFile we want to update
     *   }
     * })
    **/
    upsert<T extends ImgFileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImgFileUpsertArgs<ExtArgs>>
    ): Prisma__ImgFileClient<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ImgFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileCountArgs} args - Arguments to filter ImgFiles to count.
     * @example
     * // Count the number of ImgFiles
     * const count = await prisma.imgFile.count({
     *   where: {
     *     // ... the filter for the ImgFiles we want to count
     *   }
     * })
    **/
    count<T extends ImgFileCountArgs>(
      args?: Subset<T, ImgFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImgFileAggregateArgs>(args: Subset<T, ImgFileAggregateArgs>): Prisma.PrismaPromise<GetImgFileAggregateType<T>>

    /**
     * Group by ImgFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFileGroupByArgs} args - Group by arguments.
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
      T extends ImgFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgFileGroupByArgs['orderBy'] }
        : { orderBy?: ImgFileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImgFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgFile model
   */
  readonly fields: ImgFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends TypeImgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeImgDefaultArgs<ExtArgs>>): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ImgFile model
   */ 
  interface ImgFileFieldRefs {
    readonly id: FieldRef<"ImgFile", 'Int'>
    readonly originalName: FieldRef<"ImgFile", 'String'>
    readonly authorId: FieldRef<"ImgFile", 'Int'>
    readonly username: FieldRef<"ImgFile", 'String'>
    readonly name: FieldRef<"ImgFile", 'String'>
    readonly department: FieldRef<"ImgFile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ImgFile findUnique
   */
  export type ImgFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter, which ImgFile to fetch.
     */
    where: ImgFileWhereUniqueInput
  }


  /**
   * ImgFile findUniqueOrThrow
   */
  export type ImgFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter, which ImgFile to fetch.
     */
    where: ImgFileWhereUniqueInput
  }


  /**
   * ImgFile findFirst
   */
  export type ImgFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter, which ImgFile to fetch.
     */
    where?: ImgFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFiles to fetch.
     */
    orderBy?: ImgFileOrderByWithRelationInput | ImgFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgFiles.
     */
    cursor?: ImgFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgFiles.
     */
    distinct?: ImgFileScalarFieldEnum | ImgFileScalarFieldEnum[]
  }


  /**
   * ImgFile findFirstOrThrow
   */
  export type ImgFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter, which ImgFile to fetch.
     */
    where?: ImgFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFiles to fetch.
     */
    orderBy?: ImgFileOrderByWithRelationInput | ImgFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgFiles.
     */
    cursor?: ImgFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgFiles.
     */
    distinct?: ImgFileScalarFieldEnum | ImgFileScalarFieldEnum[]
  }


  /**
   * ImgFile findMany
   */
  export type ImgFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter, which ImgFiles to fetch.
     */
    where?: ImgFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFiles to fetch.
     */
    orderBy?: ImgFileOrderByWithRelationInput | ImgFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgFiles.
     */
    cursor?: ImgFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFiles.
     */
    skip?: number
    distinct?: ImgFileScalarFieldEnum | ImgFileScalarFieldEnum[]
  }


  /**
   * ImgFile create
   */
  export type ImgFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ImgFile.
     */
    data: XOR<ImgFileCreateInput, ImgFileUncheckedCreateInput>
  }


  /**
   * ImgFile createMany
   */
  export type ImgFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgFiles.
     */
    data: ImgFileCreateManyInput | ImgFileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ImgFile update
   */
  export type ImgFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ImgFile.
     */
    data: XOR<ImgFileUpdateInput, ImgFileUncheckedUpdateInput>
    /**
     * Choose, which ImgFile to update.
     */
    where: ImgFileWhereUniqueInput
  }


  /**
   * ImgFile updateMany
   */
  export type ImgFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgFiles.
     */
    data: XOR<ImgFileUpdateManyMutationInput, ImgFileUncheckedUpdateManyInput>
    /**
     * Filter which ImgFiles to update
     */
    where?: ImgFileWhereInput
  }


  /**
   * ImgFile upsert
   */
  export type ImgFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ImgFile to update in case it exists.
     */
    where: ImgFileWhereUniqueInput
    /**
     * In case the ImgFile found by the `where` argument doesn't exist, create a new ImgFile with this data.
     */
    create: XOR<ImgFileCreateInput, ImgFileUncheckedCreateInput>
    /**
     * In case the ImgFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgFileUpdateInput, ImgFileUncheckedUpdateInput>
  }


  /**
   * ImgFile delete
   */
  export type ImgFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    /**
     * Filter which ImgFile to delete.
     */
    where: ImgFileWhereUniqueInput
  }


  /**
   * ImgFile deleteMany
   */
  export type ImgFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgFiles to delete
     */
    where?: ImgFileWhereInput
  }


  /**
   * ImgFile without action
   */
  export type ImgFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
  }



  /**
   * Model TypeImg
   */

  export type AggregateTypeImg = {
    _count: TypeImgCountAggregateOutputType | null
    _avg: TypeImgAvgAggregateOutputType | null
    _sum: TypeImgSumAggregateOutputType | null
    _min: TypeImgMinAggregateOutputType | null
    _max: TypeImgMaxAggregateOutputType | null
  }

  export type TypeImgAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeImgSumAggregateOutputType = {
    id: number | null
  }

  export type TypeImgMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type TypeImgMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type TypeImgCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type TypeImgAvgAggregateInputType = {
    id?: true
  }

  export type TypeImgSumAggregateInputType = {
    id?: true
  }

  export type TypeImgMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type TypeImgMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type TypeImgCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type TypeImgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeImg to aggregate.
     */
    where?: TypeImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeImgs to fetch.
     */
    orderBy?: TypeImgOrderByWithRelationInput | TypeImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeImgs
    **/
    _count?: true | TypeImgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeImgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeImgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeImgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeImgMaxAggregateInputType
  }

  export type GetTypeImgAggregateType<T extends TypeImgAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeImg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeImg[P]>
      : GetScalarType<T[P], AggregateTypeImg[P]>
  }




  export type TypeImgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeImgWhereInput
    orderBy?: TypeImgOrderByWithAggregationInput | TypeImgOrderByWithAggregationInput[]
    by: TypeImgScalarFieldEnum[] | TypeImgScalarFieldEnum
    having?: TypeImgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeImgCountAggregateInputType | true
    _avg?: TypeImgAvgAggregateInputType
    _sum?: TypeImgSumAggregateInputType
    _min?: TypeImgMinAggregateInputType
    _max?: TypeImgMaxAggregateInputType
  }

  export type TypeImgGroupByOutputType = {
    id: number
    type: string | null
    _count: TypeImgCountAggregateOutputType | null
    _avg: TypeImgAvgAggregateOutputType | null
    _sum: TypeImgSumAggregateOutputType | null
    _min: TypeImgMinAggregateOutputType | null
    _max: TypeImgMaxAggregateOutputType | null
  }

  type GetTypeImgGroupByPayload<T extends TypeImgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeImgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeImgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeImgGroupByOutputType[P]>
            : GetScalarType<T[P], TypeImgGroupByOutputType[P]>
        }
      >
    >


  export type TypeImgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    imgsrc?: boolean | TypeImg$imgsrcArgs<ExtArgs>
    _count?: boolean | TypeImgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeImg"]>

  export type TypeImgSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type TypeImgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgsrc?: boolean | TypeImg$imgsrcArgs<ExtArgs>
    _count?: boolean | TypeImgCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TypeImgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeImg"
    objects: {
      imgsrc: Prisma.$ImgFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
    }, ExtArgs["result"]["typeImg"]>
    composites: {}
  }


  type TypeImgGetPayload<S extends boolean | null | undefined | TypeImgDefaultArgs> = $Result.GetResult<Prisma.$TypeImgPayload, S>

  type TypeImgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeImgFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TypeImgCountAggregateInputType | true
    }

  export interface TypeImgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeImg'], meta: { name: 'TypeImg' } }
    /**
     * Find zero or one TypeImg that matches the filter.
     * @param {TypeImgFindUniqueArgs} args - Arguments to find a TypeImg
     * @example
     * // Get one TypeImg
     * const typeImg = await prisma.typeImg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypeImgFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgFindUniqueArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TypeImg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypeImgFindUniqueOrThrowArgs} args - Arguments to find a TypeImg
     * @example
     * // Get one TypeImg
     * const typeImg = await prisma.typeImg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypeImgFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TypeImg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgFindFirstArgs} args - Arguments to find a TypeImg
     * @example
     * // Get one TypeImg
     * const typeImg = await prisma.typeImg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypeImgFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgFindFirstArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TypeImg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgFindFirstOrThrowArgs} args - Arguments to find a TypeImg
     * @example
     * // Get one TypeImg
     * const typeImg = await prisma.typeImg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypeImgFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TypeImgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeImgs
     * const typeImgs = await prisma.typeImg.findMany()
     * 
     * // Get first 10 TypeImgs
     * const typeImgs = await prisma.typeImg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeImgWithIdOnly = await prisma.typeImg.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypeImgFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TypeImg.
     * @param {TypeImgCreateArgs} args - Arguments to create a TypeImg.
     * @example
     * // Create one TypeImg
     * const TypeImg = await prisma.typeImg.create({
     *   data: {
     *     // ... data to create a TypeImg
     *   }
     * })
     * 
    **/
    create<T extends TypeImgCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgCreateArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TypeImgs.
     *     @param {TypeImgCreateManyArgs} args - Arguments to create many TypeImgs.
     *     @example
     *     // Create many TypeImgs
     *     const typeImg = await prisma.typeImg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypeImgCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TypeImg.
     * @param {TypeImgDeleteArgs} args - Arguments to delete one TypeImg.
     * @example
     * // Delete one TypeImg
     * const TypeImg = await prisma.typeImg.delete({
     *   where: {
     *     // ... filter to delete one TypeImg
     *   }
     * })
     * 
    **/
    delete<T extends TypeImgDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgDeleteArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TypeImg.
     * @param {TypeImgUpdateArgs} args - Arguments to update one TypeImg.
     * @example
     * // Update one TypeImg
     * const typeImg = await prisma.typeImg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypeImgUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgUpdateArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TypeImgs.
     * @param {TypeImgDeleteManyArgs} args - Arguments to filter TypeImgs to delete.
     * @example
     * // Delete a few TypeImgs
     * const { count } = await prisma.typeImg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypeImgDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeImgDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeImgs
     * const typeImg = await prisma.typeImg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypeImgUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TypeImg.
     * @param {TypeImgUpsertArgs} args - Arguments to update or create a TypeImg.
     * @example
     * // Update or create a TypeImg
     * const typeImg = await prisma.typeImg.upsert({
     *   create: {
     *     // ... data to create a TypeImg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeImg we want to update
     *   }
     * })
    **/
    upsert<T extends TypeImgUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypeImgUpsertArgs<ExtArgs>>
    ): Prisma__TypeImgClient<$Result.GetResult<Prisma.$TypeImgPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TypeImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgCountArgs} args - Arguments to filter TypeImgs to count.
     * @example
     * // Count the number of TypeImgs
     * const count = await prisma.typeImg.count({
     *   where: {
     *     // ... the filter for the TypeImgs we want to count
     *   }
     * })
    **/
    count<T extends TypeImgCountArgs>(
      args?: Subset<T, TypeImgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeImgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeImgAggregateArgs>(args: Subset<T, TypeImgAggregateArgs>): Prisma.PrismaPromise<GetTypeImgAggregateType<T>>

    /**
     * Group by TypeImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeImgGroupByArgs} args - Group by arguments.
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
      T extends TypeImgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeImgGroupByArgs['orderBy'] }
        : { orderBy?: TypeImgGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeImgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeImgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeImg model
   */
  readonly fields: TypeImgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeImg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeImgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    imgsrc<T extends TypeImg$imgsrcArgs<ExtArgs> = {}>(args?: Subset<T, TypeImg$imgsrcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgFilePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TypeImg model
   */ 
  interface TypeImgFieldRefs {
    readonly id: FieldRef<"TypeImg", 'Int'>
    readonly type: FieldRef<"TypeImg", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TypeImg findUnique
   */
  export type TypeImgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter, which TypeImg to fetch.
     */
    where: TypeImgWhereUniqueInput
  }


  /**
   * TypeImg findUniqueOrThrow
   */
  export type TypeImgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter, which TypeImg to fetch.
     */
    where: TypeImgWhereUniqueInput
  }


  /**
   * TypeImg findFirst
   */
  export type TypeImgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter, which TypeImg to fetch.
     */
    where?: TypeImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeImgs to fetch.
     */
    orderBy?: TypeImgOrderByWithRelationInput | TypeImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeImgs.
     */
    cursor?: TypeImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeImgs.
     */
    distinct?: TypeImgScalarFieldEnum | TypeImgScalarFieldEnum[]
  }


  /**
   * TypeImg findFirstOrThrow
   */
  export type TypeImgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter, which TypeImg to fetch.
     */
    where?: TypeImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeImgs to fetch.
     */
    orderBy?: TypeImgOrderByWithRelationInput | TypeImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeImgs.
     */
    cursor?: TypeImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeImgs.
     */
    distinct?: TypeImgScalarFieldEnum | TypeImgScalarFieldEnum[]
  }


  /**
   * TypeImg findMany
   */
  export type TypeImgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter, which TypeImgs to fetch.
     */
    where?: TypeImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeImgs to fetch.
     */
    orderBy?: TypeImgOrderByWithRelationInput | TypeImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeImgs.
     */
    cursor?: TypeImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeImgs.
     */
    skip?: number
    distinct?: TypeImgScalarFieldEnum | TypeImgScalarFieldEnum[]
  }


  /**
   * TypeImg create
   */
  export type TypeImgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeImg.
     */
    data?: XOR<TypeImgCreateInput, TypeImgUncheckedCreateInput>
  }


  /**
   * TypeImg createMany
   */
  export type TypeImgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeImgs.
     */
    data: TypeImgCreateManyInput | TypeImgCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TypeImg update
   */
  export type TypeImgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeImg.
     */
    data: XOR<TypeImgUpdateInput, TypeImgUncheckedUpdateInput>
    /**
     * Choose, which TypeImg to update.
     */
    where: TypeImgWhereUniqueInput
  }


  /**
   * TypeImg updateMany
   */
  export type TypeImgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeImgs.
     */
    data: XOR<TypeImgUpdateManyMutationInput, TypeImgUncheckedUpdateManyInput>
    /**
     * Filter which TypeImgs to update
     */
    where?: TypeImgWhereInput
  }


  /**
   * TypeImg upsert
   */
  export type TypeImgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeImg to update in case it exists.
     */
    where: TypeImgWhereUniqueInput
    /**
     * In case the TypeImg found by the `where` argument doesn't exist, create a new TypeImg with this data.
     */
    create: XOR<TypeImgCreateInput, TypeImgUncheckedCreateInput>
    /**
     * In case the TypeImg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeImgUpdateInput, TypeImgUncheckedUpdateInput>
  }


  /**
   * TypeImg delete
   */
  export type TypeImgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
    /**
     * Filter which TypeImg to delete.
     */
    where: TypeImgWhereUniqueInput
  }


  /**
   * TypeImg deleteMany
   */
  export type TypeImgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeImgs to delete
     */
    where?: TypeImgWhereInput
  }


  /**
   * TypeImg.imgsrc
   */
  export type TypeImg$imgsrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFile
     */
    select?: ImgFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImgFileInclude<ExtArgs> | null
    where?: ImgFileWhereInput
    orderBy?: ImgFileOrderByWithRelationInput | ImgFileOrderByWithRelationInput[]
    cursor?: ImgFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImgFileScalarFieldEnum | ImgFileScalarFieldEnum[]
  }


  /**
   * TypeImg without action
   */
  export type TypeImgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeImg
     */
    select?: TypeImgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeImgInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    department: 'department',
    status: 'status',
    VoteFor: 'VoteFor',
    StartDate: 'StartDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImgFileScalarFieldEnum: {
    id: 'id',
    originalName: 'originalName',
    authorId: 'authorId',
    username: 'username',
    name: 'name',
    department: 'department'
  };

  export type ImgFileScalarFieldEnum = (typeof ImgFileScalarFieldEnum)[keyof typeof ImgFileScalarFieldEnum]


  export const TypeImgScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type TypeImgScalarFieldEnum = (typeof TypeImgScalarFieldEnum)[keyof typeof TypeImgScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    department?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    VoteFor?: StringFilter<"User"> | string
    StartDate?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    status?: SortOrder
    VoteFor?: SortOrder
    StartDate?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    department?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    VoteFor?: StringFilter<"User"> | string
    StartDate?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    status?: SortOrder
    VoteFor?: SortOrder
    StartDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    department?: StringWithAggregatesFilter<"User"> | string
    status?: IntWithAggregatesFilter<"User"> | number
    VoteFor?: StringWithAggregatesFilter<"User"> | string
    StartDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ImgFileWhereInput = {
    AND?: ImgFileWhereInput | ImgFileWhereInput[]
    OR?: ImgFileWhereInput[]
    NOT?: ImgFileWhereInput | ImgFileWhereInput[]
    id?: IntFilter<"ImgFile"> | number
    originalName?: StringFilter<"ImgFile"> | string
    authorId?: IntFilter<"ImgFile"> | number
    username?: StringFilter<"ImgFile"> | string
    name?: StringFilter<"ImgFile"> | string
    department?: StringFilter<"ImgFile"> | string
    author?: XOR<TypeImgRelationFilter, TypeImgWhereInput>
  }

  export type ImgFileOrderByWithRelationInput = {
    id?: SortOrder
    originalName?: SortOrder
    authorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    author?: TypeImgOrderByWithRelationInput
  }

  export type ImgFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    originalName?: string
    name?: string
    AND?: ImgFileWhereInput | ImgFileWhereInput[]
    OR?: ImgFileWhereInput[]
    NOT?: ImgFileWhereInput | ImgFileWhereInput[]
    authorId?: IntFilter<"ImgFile"> | number
    username?: StringFilter<"ImgFile"> | string
    department?: StringFilter<"ImgFile"> | string
    author?: XOR<TypeImgRelationFilter, TypeImgWhereInput>
  }, "id" | "originalName" | "name">

  export type ImgFileOrderByWithAggregationInput = {
    id?: SortOrder
    originalName?: SortOrder
    authorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    _count?: ImgFileCountOrderByAggregateInput
    _avg?: ImgFileAvgOrderByAggregateInput
    _max?: ImgFileMaxOrderByAggregateInput
    _min?: ImgFileMinOrderByAggregateInput
    _sum?: ImgFileSumOrderByAggregateInput
  }

  export type ImgFileScalarWhereWithAggregatesInput = {
    AND?: ImgFileScalarWhereWithAggregatesInput | ImgFileScalarWhereWithAggregatesInput[]
    OR?: ImgFileScalarWhereWithAggregatesInput[]
    NOT?: ImgFileScalarWhereWithAggregatesInput | ImgFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImgFile"> | number
    originalName?: StringWithAggregatesFilter<"ImgFile"> | string
    authorId?: IntWithAggregatesFilter<"ImgFile"> | number
    username?: StringWithAggregatesFilter<"ImgFile"> | string
    name?: StringWithAggregatesFilter<"ImgFile"> | string
    department?: StringWithAggregatesFilter<"ImgFile"> | string
  }

  export type TypeImgWhereInput = {
    AND?: TypeImgWhereInput | TypeImgWhereInput[]
    OR?: TypeImgWhereInput[]
    NOT?: TypeImgWhereInput | TypeImgWhereInput[]
    id?: IntFilter<"TypeImg"> | number
    type?: StringNullableFilter<"TypeImg"> | string | null
    imgsrc?: ImgFileListRelationFilter
  }

  export type TypeImgOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    imgsrc?: ImgFileOrderByRelationAggregateInput
  }

  export type TypeImgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeImgWhereInput | TypeImgWhereInput[]
    OR?: TypeImgWhereInput[]
    NOT?: TypeImgWhereInput | TypeImgWhereInput[]
    type?: StringNullableFilter<"TypeImg"> | string | null
    imgsrc?: ImgFileListRelationFilter
  }, "id">

  export type TypeImgOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: TypeImgCountOrderByAggregateInput
    _avg?: TypeImgAvgOrderByAggregateInput
    _max?: TypeImgMaxOrderByAggregateInput
    _min?: TypeImgMinOrderByAggregateInput
    _sum?: TypeImgSumOrderByAggregateInput
  }

  export type TypeImgScalarWhereWithAggregatesInput = {
    AND?: TypeImgScalarWhereWithAggregatesInput | TypeImgScalarWhereWithAggregatesInput[]
    OR?: TypeImgScalarWhereWithAggregatesInput[]
    NOT?: TypeImgScalarWhereWithAggregatesInput | TypeImgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeImg"> | number
    type?: StringNullableWithAggregatesFilter<"TypeImg"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    name: string
    department: string
    status?: number
    VoteFor: string
    StartDate: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    name: string
    department: string
    status?: number
    VoteFor: string
    StartDate: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    VoteFor?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    VoteFor?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    name: string
    department: string
    status?: number
    VoteFor: string
    StartDate: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    VoteFor?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    VoteFor?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgFileCreateInput = {
    originalName: string
    username: string
    name: string
    department?: string
    author: TypeImgCreateNestedOneWithoutImgsrcInput
  }

  export type ImgFileUncheckedCreateInput = {
    id?: number
    originalName: string
    authorId: number
    username: string
    name: string
    department?: string
  }

  export type ImgFileUpdateInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    author?: TypeImgUpdateOneRequiredWithoutImgsrcNestedInput
  }

  export type ImgFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ImgFileCreateManyInput = {
    id?: number
    originalName: string
    authorId: number
    username: string
    name: string
    department?: string
  }

  export type ImgFileUpdateManyMutationInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ImgFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type TypeImgCreateInput = {
    type?: string | null
    imgsrc?: ImgFileCreateNestedManyWithoutAuthorInput
  }

  export type TypeImgUncheckedCreateInput = {
    id?: number
    type?: string | null
    imgsrc?: ImgFileUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type TypeImgUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imgsrc?: ImgFileUpdateManyWithoutAuthorNestedInput
  }

  export type TypeImgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imgsrc?: ImgFileUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TypeImgCreateManyInput = {
    id?: number
    type?: string | null
  }

  export type TypeImgUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TypeImgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    status?: SortOrder
    VoteFor?: SortOrder
    StartDate?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    status?: SortOrder
    VoteFor?: SortOrder
    StartDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
    status?: SortOrder
    VoteFor?: SortOrder
    StartDate?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TypeImgRelationFilter = {
    is?: TypeImgWhereInput
    isNot?: TypeImgWhereInput
  }

  export type ImgFileCountOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    authorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type ImgFileAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type ImgFileMaxOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    authorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type ImgFileMinOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    authorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type ImgFileSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImgFileListRelationFilter = {
    every?: ImgFileWhereInput
    some?: ImgFileWhereInput
    none?: ImgFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImgFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeImgCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TypeImgAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeImgMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TypeImgMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TypeImgSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TypeImgCreateNestedOneWithoutImgsrcInput = {
    create?: XOR<TypeImgCreateWithoutImgsrcInput, TypeImgUncheckedCreateWithoutImgsrcInput>
    connectOrCreate?: TypeImgCreateOrConnectWithoutImgsrcInput
    connect?: TypeImgWhereUniqueInput
  }

  export type TypeImgUpdateOneRequiredWithoutImgsrcNestedInput = {
    create?: XOR<TypeImgCreateWithoutImgsrcInput, TypeImgUncheckedCreateWithoutImgsrcInput>
    connectOrCreate?: TypeImgCreateOrConnectWithoutImgsrcInput
    upsert?: TypeImgUpsertWithoutImgsrcInput
    connect?: TypeImgWhereUniqueInput
    update?: XOR<XOR<TypeImgUpdateToOneWithWhereWithoutImgsrcInput, TypeImgUpdateWithoutImgsrcInput>, TypeImgUncheckedUpdateWithoutImgsrcInput>
  }

  export type ImgFileCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput> | ImgFileCreateWithoutAuthorInput[] | ImgFileUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImgFileCreateOrConnectWithoutAuthorInput | ImgFileCreateOrConnectWithoutAuthorInput[]
    createMany?: ImgFileCreateManyAuthorInputEnvelope
    connect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
  }

  export type ImgFileUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput> | ImgFileCreateWithoutAuthorInput[] | ImgFileUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImgFileCreateOrConnectWithoutAuthorInput | ImgFileCreateOrConnectWithoutAuthorInput[]
    createMany?: ImgFileCreateManyAuthorInputEnvelope
    connect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ImgFileUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput> | ImgFileCreateWithoutAuthorInput[] | ImgFileUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImgFileCreateOrConnectWithoutAuthorInput | ImgFileCreateOrConnectWithoutAuthorInput[]
    upsert?: ImgFileUpsertWithWhereUniqueWithoutAuthorInput | ImgFileUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ImgFileCreateManyAuthorInputEnvelope
    set?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    disconnect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    delete?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    connect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    update?: ImgFileUpdateWithWhereUniqueWithoutAuthorInput | ImgFileUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ImgFileUpdateManyWithWhereWithoutAuthorInput | ImgFileUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ImgFileScalarWhereInput | ImgFileScalarWhereInput[]
  }

  export type ImgFileUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput> | ImgFileCreateWithoutAuthorInput[] | ImgFileUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImgFileCreateOrConnectWithoutAuthorInput | ImgFileCreateOrConnectWithoutAuthorInput[]
    upsert?: ImgFileUpsertWithWhereUniqueWithoutAuthorInput | ImgFileUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ImgFileCreateManyAuthorInputEnvelope
    set?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    disconnect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    delete?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    connect?: ImgFileWhereUniqueInput | ImgFileWhereUniqueInput[]
    update?: ImgFileUpdateWithWhereUniqueWithoutAuthorInput | ImgFileUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ImgFileUpdateManyWithWhereWithoutAuthorInput | ImgFileUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ImgFileScalarWhereInput | ImgFileScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TypeImgCreateWithoutImgsrcInput = {
    type?: string | null
  }

  export type TypeImgUncheckedCreateWithoutImgsrcInput = {
    id?: number
    type?: string | null
  }

  export type TypeImgCreateOrConnectWithoutImgsrcInput = {
    where: TypeImgWhereUniqueInput
    create: XOR<TypeImgCreateWithoutImgsrcInput, TypeImgUncheckedCreateWithoutImgsrcInput>
  }

  export type TypeImgUpsertWithoutImgsrcInput = {
    update: XOR<TypeImgUpdateWithoutImgsrcInput, TypeImgUncheckedUpdateWithoutImgsrcInput>
    create: XOR<TypeImgCreateWithoutImgsrcInput, TypeImgUncheckedCreateWithoutImgsrcInput>
    where?: TypeImgWhereInput
  }

  export type TypeImgUpdateToOneWithWhereWithoutImgsrcInput = {
    where?: TypeImgWhereInput
    data: XOR<TypeImgUpdateWithoutImgsrcInput, TypeImgUncheckedUpdateWithoutImgsrcInput>
  }

  export type TypeImgUpdateWithoutImgsrcInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TypeImgUncheckedUpdateWithoutImgsrcInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgFileCreateWithoutAuthorInput = {
    originalName: string
    username: string
    name: string
    department?: string
  }

  export type ImgFileUncheckedCreateWithoutAuthorInput = {
    id?: number
    originalName: string
    username: string
    name: string
    department?: string
  }

  export type ImgFileCreateOrConnectWithoutAuthorInput = {
    where: ImgFileWhereUniqueInput
    create: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput>
  }

  export type ImgFileCreateManyAuthorInputEnvelope = {
    data: ImgFileCreateManyAuthorInput | ImgFileCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ImgFileUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ImgFileWhereUniqueInput
    update: XOR<ImgFileUpdateWithoutAuthorInput, ImgFileUncheckedUpdateWithoutAuthorInput>
    create: XOR<ImgFileCreateWithoutAuthorInput, ImgFileUncheckedCreateWithoutAuthorInput>
  }

  export type ImgFileUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ImgFileWhereUniqueInput
    data: XOR<ImgFileUpdateWithoutAuthorInput, ImgFileUncheckedUpdateWithoutAuthorInput>
  }

  export type ImgFileUpdateManyWithWhereWithoutAuthorInput = {
    where: ImgFileScalarWhereInput
    data: XOR<ImgFileUpdateManyMutationInput, ImgFileUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ImgFileScalarWhereInput = {
    AND?: ImgFileScalarWhereInput | ImgFileScalarWhereInput[]
    OR?: ImgFileScalarWhereInput[]
    NOT?: ImgFileScalarWhereInput | ImgFileScalarWhereInput[]
    id?: IntFilter<"ImgFile"> | number
    originalName?: StringFilter<"ImgFile"> | string
    authorId?: IntFilter<"ImgFile"> | number
    username?: StringFilter<"ImgFile"> | string
    name?: StringFilter<"ImgFile"> | string
    department?: StringFilter<"ImgFile"> | string
  }

  export type ImgFileCreateManyAuthorInput = {
    id?: number
    originalName: string
    username: string
    name: string
    department?: string
  }

  export type ImgFileUpdateWithoutAuthorInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ImgFileUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ImgFileUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TypeImgCountOutputTypeDefaultArgs instead
     */
    export type TypeImgCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeImgCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImgFileDefaultArgs instead
     */
    export type ImgFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImgFileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeImgDefaultArgs instead
     */
    export type TypeImgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeImgDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
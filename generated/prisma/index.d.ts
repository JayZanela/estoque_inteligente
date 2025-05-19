
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model produtos
 * 
 */
export type produtos = $Result.DefaultSelection<Prisma.$produtosPayload>
/**
 * Model modelos_moto
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type modelos_moto = $Result.DefaultSelection<Prisma.$modelos_motoPayload>
/**
 * Model movimentacoes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type movimentacoes = $Result.DefaultSelection<Prisma.$movimentacoesPayload>
/**
 * Model posicoes_estoque
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type posicoes_estoque = $Result.DefaultSelection<Prisma.$posicoes_estoquePayload>
/**
 * Model subcategorias
 * 
 */
export type subcategorias = $Result.DefaultSelection<Prisma.$subcategoriasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.produtosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelos_moto`: Exposes CRUD operations for the **modelos_moto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modelos_motos
    * const modelos_motos = await prisma.modelos_moto.findMany()
    * ```
    */
  get modelos_moto(): Prisma.modelos_motoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacoes`: Exposes CRUD operations for the **movimentacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacoes
    * const movimentacoes = await prisma.movimentacoes.findMany()
    * ```
    */
  get movimentacoes(): Prisma.movimentacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posicoes_estoque`: Exposes CRUD operations for the **posicoes_estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posicoes_estoques
    * const posicoes_estoques = await prisma.posicoes_estoque.findMany()
    * ```
    */
  get posicoes_estoque(): Prisma.posicoes_estoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategorias`: Exposes CRUD operations for the **subcategorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategorias
    * const subcategorias = await prisma.subcategorias.findMany()
    * ```
    */
  get subcategorias(): Prisma.subcategoriasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    categorias: 'categorias',
    produtos: 'produtos',
    modelos_moto: 'modelos_moto',
    movimentacoes: 'movimentacoes',
    posicoes_estoque: 'posicoes_estoque',
    subcategorias: 'subcategorias'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categorias" | "produtos" | "modelos_moto" | "movimentacoes" | "posicoes_estoque" | "subcategorias"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      produtos: {
        payload: Prisma.$produtosPayload<ExtArgs>
        fields: Prisma.produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findFirst: {
            args: Prisma.produtosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findMany: {
            args: Prisma.produtosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          create: {
            args: Prisma.produtosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          createMany: {
            args: Prisma.produtosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produtosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          delete: {
            args: Prisma.produtosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          update: {
            args: Prisma.produtosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          deleteMany: {
            args: Prisma.produtosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produtosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          upsert: {
            args: Prisma.produtosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.produtosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtosCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
      modelos_moto: {
        payload: Prisma.$modelos_motoPayload<ExtArgs>
        fields: Prisma.modelos_motoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modelos_motoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modelos_motoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          findFirst: {
            args: Prisma.modelos_motoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modelos_motoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          findMany: {
            args: Prisma.modelos_motoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>[]
          }
          create: {
            args: Prisma.modelos_motoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          createMany: {
            args: Prisma.modelos_motoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.modelos_motoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>[]
          }
          delete: {
            args: Prisma.modelos_motoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          update: {
            args: Prisma.modelos_motoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          deleteMany: {
            args: Prisma.modelos_motoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modelos_motoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.modelos_motoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>[]
          }
          upsert: {
            args: Prisma.modelos_motoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelos_motoPayload>
          }
          aggregate: {
            args: Prisma.Modelos_motoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelos_moto>
          }
          groupBy: {
            args: Prisma.modelos_motoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Modelos_motoGroupByOutputType>[]
          }
          count: {
            args: Prisma.modelos_motoCountArgs<ExtArgs>
            result: $Utils.Optional<Modelos_motoCountAggregateOutputType> | number
          }
        }
      }
      movimentacoes: {
        payload: Prisma.$movimentacoesPayload<ExtArgs>
        fields: Prisma.movimentacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimentacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimentacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          findFirst: {
            args: Prisma.movimentacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimentacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          findMany: {
            args: Prisma.movimentacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>[]
          }
          create: {
            args: Prisma.movimentacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          createMany: {
            args: Prisma.movimentacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movimentacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>[]
          }
          delete: {
            args: Prisma.movimentacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          update: {
            args: Prisma.movimentacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          deleteMany: {
            args: Prisma.movimentacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimentacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.movimentacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>[]
          }
          upsert: {
            args: Prisma.movimentacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimentacoesPayload>
          }
          aggregate: {
            args: Prisma.MovimentacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacoes>
          }
          groupBy: {
            args: Prisma.movimentacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimentacoesCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacoesCountAggregateOutputType> | number
          }
        }
      }
      posicoes_estoque: {
        payload: Prisma.$posicoes_estoquePayload<ExtArgs>
        fields: Prisma.posicoes_estoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posicoes_estoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posicoes_estoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          findFirst: {
            args: Prisma.posicoes_estoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posicoes_estoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          findMany: {
            args: Prisma.posicoes_estoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>[]
          }
          create: {
            args: Prisma.posicoes_estoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          createMany: {
            args: Prisma.posicoes_estoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posicoes_estoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>[]
          }
          delete: {
            args: Prisma.posicoes_estoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          update: {
            args: Prisma.posicoes_estoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          deleteMany: {
            args: Prisma.posicoes_estoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posicoes_estoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.posicoes_estoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>[]
          }
          upsert: {
            args: Prisma.posicoes_estoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posicoes_estoquePayload>
          }
          aggregate: {
            args: Prisma.Posicoes_estoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosicoes_estoque>
          }
          groupBy: {
            args: Prisma.posicoes_estoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Posicoes_estoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.posicoes_estoqueCountArgs<ExtArgs>
            result: $Utils.Optional<Posicoes_estoqueCountAggregateOutputType> | number
          }
        }
      }
      subcategorias: {
        payload: Prisma.$subcategoriasPayload<ExtArgs>
        fields: Prisma.subcategoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subcategoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subcategoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          findFirst: {
            args: Prisma.subcategoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subcategoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          findMany: {
            args: Prisma.subcategoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>[]
          }
          create: {
            args: Prisma.subcategoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          createMany: {
            args: Prisma.subcategoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subcategoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>[]
          }
          delete: {
            args: Prisma.subcategoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          update: {
            args: Prisma.subcategoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          deleteMany: {
            args: Prisma.subcategoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subcategoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subcategoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>[]
          }
          upsert: {
            args: Prisma.subcategoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriasPayload>
          }
          aggregate: {
            args: Prisma.SubcategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategorias>
          }
          groupBy: {
            args: Prisma.subcategoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.subcategoriasCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categorias?: categoriasOmit
    produtos?: produtosOmit
    modelos_moto?: modelos_motoOmit
    movimentacoes?: movimentacoesOmit
    posicoes_estoque?: posicoes_estoqueOmit
    subcategorias?: subcategoriasOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    produtos: number
    subcategorias: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriasCountOutputTypeCountProdutosArgs
    subcategorias?: boolean | CategoriasCountOutputTypeCountSubcategoriasArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountSubcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriasWhereInput
  }


  /**
   * Count Type ProdutosCountOutputType
   */

  export type ProdutosCountOutputType = {
    movimentacoes: number
    posicoes_estoque: number
  }

  export type ProdutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | ProdutosCountOutputTypeCountMovimentacoesArgs
    posicoes_estoque?: boolean | ProdutosCountOutputTypeCountPosicoes_estoqueArgs
  }

  // Custom InputTypes
  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutosCountOutputType
     */
    select?: ProdutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimentacoesWhereInput
  }

  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeCountPosicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posicoes_estoqueWhereInput
  }


  /**
   * Count Type Posicoes_estoqueCountOutputType
   */

  export type Posicoes_estoqueCountOutputType = {
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque: number
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque: number
  }

  export type Posicoes_estoqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | Posicoes_estoqueCountOutputTypeCountMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | Posicoes_estoqueCountOutputTypeCountMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs
  }

  // Custom InputTypes
  /**
   * Posicoes_estoqueCountOutputType without action
   */
  export type Posicoes_estoqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posicoes_estoqueCountOutputType
     */
    select?: Posicoes_estoqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Posicoes_estoqueCountOutputType without action
   */
  export type Posicoes_estoqueCountOutputTypeCountMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimentacoesWhereInput
  }

  /**
   * Posicoes_estoqueCountOutputType without action
   */
  export type Posicoes_estoqueCountOutputTypeCountMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimentacoesWhereInput
  }


  /**
   * Count Type SubcategoriasCountOutputType
   */

  export type SubcategoriasCountOutputType = {
    produtos: number
  }

  export type SubcategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | SubcategoriasCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * SubcategoriasCountOutputType without action
   */
  export type SubcategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoriasCountOutputType
     */
    select?: SubcategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoriasCountOutputType without action
   */
  export type SubcategoriasCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    codigo: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    codigo: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    codigo: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigo?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigo?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigo?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    codigo: string | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
    produtos?: boolean | categorias$produtosArgs<ExtArgs>
    subcategorias?: boolean | categorias$subcategoriasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "codigo", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | categorias$produtosArgs<ExtArgs>
    subcategorias?: boolean | categorias$subcategoriasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      produtos: Prisma.$produtosPayload<ExtArgs>[]
      subcategorias: Prisma.$subcategoriasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      codigo: string | null
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends categorias$produtosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcategorias<T extends categorias$subcategoriasArgs<ExtArgs> = {}>(args?: Subset<T, categorias$subcategoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'Int'>
    readonly nome: FieldRef<"categorias", 'String'>
    readonly descricao: FieldRef<"categorias", 'String'>
    readonly codigo: FieldRef<"categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias updateManyAndReturn
   */
  export type categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.produtos
   */
  export type categorias$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    cursor?: produtosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * categorias.subcategorias
   */
  export type categorias$subcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    where?: subcategoriasWhereInput
    orderBy?: subcategoriasOrderByWithRelationInput | subcategoriasOrderByWithRelationInput[]
    cursor?: subcategoriasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoriasScalarFieldEnum | SubcategoriasScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosAvgAggregateOutputType = {
    id: number | null
    peso_unitario: Decimal | null
    volume: Decimal | null
    preco_custo: Decimal | null
    preco_venda: Decimal | null
    estoque_minimo: number | null
    estoque_maximo: number | null
    ponto_reposicao: number | null
    lead_time: number | null
    categoria_id: number | null
    subcategoria_id: number | null
    fornecedor_principal_id: number | null
  }

  export type ProdutosSumAggregateOutputType = {
    id: number | null
    peso_unitario: Decimal | null
    volume: Decimal | null
    preco_custo: Decimal | null
    preco_venda: Decimal | null
    estoque_minimo: number | null
    estoque_maximo: number | null
    ponto_reposicao: number | null
    lead_time: number | null
    categoria_id: number | null
    subcategoria_id: number | null
    fornecedor_principal_id: number | null
  }

  export type ProdutosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sku: string | null
    peso_unitario: Decimal | null
    volume: Decimal | null
    tipo_embalagem: string | null
    descricao: string | null
    codigo_barras: string | null
    preco_custo: Decimal | null
    preco_venda: Decimal | null
    estoque_minimo: number | null
    estoque_maximo: number | null
    ponto_reposicao: number | null
    lead_time: number | null
    status: string | null
    unidade_medida: string | null
    categoria_id: number | null
    subcategoria_id: number | null
    fornecedor_principal_id: number | null
    data_cadastro: Date | null
    imagem_url: string | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sku: string | null
    peso_unitario: Decimal | null
    volume: Decimal | null
    tipo_embalagem: string | null
    descricao: string | null
    codigo_barras: string | null
    preco_custo: Decimal | null
    preco_venda: Decimal | null
    estoque_minimo: number | null
    estoque_maximo: number | null
    ponto_reposicao: number | null
    lead_time: number | null
    status: string | null
    unidade_medida: string | null
    categoria_id: number | null
    subcategoria_id: number | null
    fornecedor_principal_id: number | null
    data_cadastro: Date | null
    imagem_url: string | null
  }

  export type ProdutosCountAggregateOutputType = {
    id: number
    nome: number
    sku: number
    peso_unitario: number
    volume: number
    tipo_embalagem: number
    descricao: number
    codigo_barras: number
    preco_custo: number
    preco_venda: number
    estoque_minimo: number
    estoque_maximo: number
    ponto_reposicao: number
    lead_time: number
    status: number
    unidade_medida: number
    categoria_id: number
    subcategoria_id: number
    fornecedor_principal_id: number
    data_cadastro: number
    imagem_url: number
    _all: number
  }


  export type ProdutosAvgAggregateInputType = {
    id?: true
    peso_unitario?: true
    volume?: true
    preco_custo?: true
    preco_venda?: true
    estoque_minimo?: true
    estoque_maximo?: true
    ponto_reposicao?: true
    lead_time?: true
    categoria_id?: true
    subcategoria_id?: true
    fornecedor_principal_id?: true
  }

  export type ProdutosSumAggregateInputType = {
    id?: true
    peso_unitario?: true
    volume?: true
    preco_custo?: true
    preco_venda?: true
    estoque_minimo?: true
    estoque_maximo?: true
    ponto_reposicao?: true
    lead_time?: true
    categoria_id?: true
    subcategoria_id?: true
    fornecedor_principal_id?: true
  }

  export type ProdutosMinAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    peso_unitario?: true
    volume?: true
    tipo_embalagem?: true
    descricao?: true
    codigo_barras?: true
    preco_custo?: true
    preco_venda?: true
    estoque_minimo?: true
    estoque_maximo?: true
    ponto_reposicao?: true
    lead_time?: true
    status?: true
    unidade_medida?: true
    categoria_id?: true
    subcategoria_id?: true
    fornecedor_principal_id?: true
    data_cadastro?: true
    imagem_url?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    peso_unitario?: true
    volume?: true
    tipo_embalagem?: true
    descricao?: true
    codigo_barras?: true
    preco_custo?: true
    preco_venda?: true
    estoque_minimo?: true
    estoque_maximo?: true
    ponto_reposicao?: true
    lead_time?: true
    status?: true
    unidade_medida?: true
    categoria_id?: true
    subcategoria_id?: true
    fornecedor_principal_id?: true
    data_cadastro?: true
    imagem_url?: true
  }

  export type ProdutosCountAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    peso_unitario?: true
    volume?: true
    tipo_embalagem?: true
    descricao?: true
    codigo_barras?: true
    preco_custo?: true
    preco_venda?: true
    estoque_minimo?: true
    estoque_maximo?: true
    ponto_reposicao?: true
    lead_time?: true
    status?: true
    unidade_medida?: true
    categoria_id?: true
    subcategoria_id?: true
    fornecedor_principal_id?: true
    data_cadastro?: true
    imagem_url?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to aggregate.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithAggregationInput | produtosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _avg?: ProdutosAvgAggregateInputType
    _sum?: ProdutosSumAggregateInputType
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id: number
    nome: string
    sku: string
    peso_unitario: Decimal | null
    volume: Decimal | null
    tipo_embalagem: string | null
    descricao: string | null
    codigo_barras: string | null
    preco_custo: Decimal | null
    preco_venda: Decimal | null
    estoque_minimo: number | null
    estoque_maximo: number | null
    ponto_reposicao: number | null
    lead_time: number | null
    status: string | null
    unidade_medida: string | null
    categoria_id: number | null
    subcategoria_id: number | null
    fornecedor_principal_id: number | null
    data_cadastro: Date | null
    imagem_url: string | null
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    peso_unitario?: boolean
    volume?: boolean
    tipo_embalagem?: boolean
    descricao?: boolean
    codigo_barras?: boolean
    preco_custo?: boolean
    preco_venda?: boolean
    estoque_minimo?: boolean
    estoque_maximo?: boolean
    ponto_reposicao?: boolean
    lead_time?: boolean
    status?: boolean
    unidade_medida?: boolean
    categoria_id?: boolean
    subcategoria_id?: boolean
    fornecedor_principal_id?: boolean
    data_cadastro?: boolean
    imagem_url?: boolean
    movimentacoes?: boolean | produtos$movimentacoesArgs<ExtArgs>
    posicoes_estoque?: boolean | produtos$posicoes_estoqueArgs<ExtArgs>
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    peso_unitario?: boolean
    volume?: boolean
    tipo_embalagem?: boolean
    descricao?: boolean
    codigo_barras?: boolean
    preco_custo?: boolean
    preco_venda?: boolean
    estoque_minimo?: boolean
    estoque_maximo?: boolean
    ponto_reposicao?: boolean
    lead_time?: boolean
    status?: boolean
    unidade_medida?: boolean
    categoria_id?: boolean
    subcategoria_id?: boolean
    fornecedor_principal_id?: boolean
    data_cadastro?: boolean
    imagem_url?: boolean
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    peso_unitario?: boolean
    volume?: boolean
    tipo_embalagem?: boolean
    descricao?: boolean
    codigo_barras?: boolean
    preco_custo?: boolean
    preco_venda?: boolean
    estoque_minimo?: boolean
    estoque_maximo?: boolean
    ponto_reposicao?: boolean
    lead_time?: boolean
    status?: boolean
    unidade_medida?: boolean
    categoria_id?: boolean
    subcategoria_id?: boolean
    fornecedor_principal_id?: boolean
    data_cadastro?: boolean
    imagem_url?: boolean
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectScalar = {
    id?: boolean
    nome?: boolean
    sku?: boolean
    peso_unitario?: boolean
    volume?: boolean
    tipo_embalagem?: boolean
    descricao?: boolean
    codigo_barras?: boolean
    preco_custo?: boolean
    preco_venda?: boolean
    estoque_minimo?: boolean
    estoque_maximo?: boolean
    ponto_reposicao?: boolean
    lead_time?: boolean
    status?: boolean
    unidade_medida?: boolean
    categoria_id?: boolean
    subcategoria_id?: boolean
    fornecedor_principal_id?: boolean
    data_cadastro?: boolean
    imagem_url?: boolean
  }

  export type produtosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sku" | "peso_unitario" | "volume" | "tipo_embalagem" | "descricao" | "codigo_barras" | "preco_custo" | "preco_venda" | "estoque_minimo" | "estoque_maximo" | "ponto_reposicao" | "lead_time" | "status" | "unidade_medida" | "categoria_id" | "subcategoria_id" | "fornecedor_principal_id" | "data_cadastro" | "imagem_url", ExtArgs["result"]["produtos"]>
  export type produtosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | produtos$movimentacoesArgs<ExtArgs>
    posicoes_estoque?: boolean | produtos$posicoes_estoqueArgs<ExtArgs>
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produtosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
  }
  export type produtosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | produtos$categoriasArgs<ExtArgs>
    subcategorias?: boolean | produtos$subcategoriasArgs<ExtArgs>
  }

  export type $produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produtos"
    objects: {
      movimentacoes: Prisma.$movimentacoesPayload<ExtArgs>[]
      posicoes_estoque: Prisma.$posicoes_estoquePayload<ExtArgs>[]
      categorias: Prisma.$categoriasPayload<ExtArgs> | null
      subcategorias: Prisma.$subcategoriasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sku: string
      peso_unitario: Prisma.Decimal | null
      volume: Prisma.Decimal | null
      tipo_embalagem: string | null
      descricao: string | null
      codigo_barras: string | null
      preco_custo: Prisma.Decimal | null
      preco_venda: Prisma.Decimal | null
      estoque_minimo: number | null
      estoque_maximo: number | null
      ponto_reposicao: number | null
      lead_time: number | null
      status: string | null
      unidade_medida: string | null
      categoria_id: number | null
      subcategoria_id: number | null
      fornecedor_principal_id: number | null
      data_cadastro: Date | null
      imagem_url: string | null
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }

  type produtosGetPayload<S extends boolean | null | undefined | produtosDefaultArgs> = $Result.GetResult<Prisma.$produtosPayload, S>

  type produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produtos'], meta: { name: 'produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {produtosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtosFindUniqueArgs>(args: SelectSubset<T, produtosFindUniqueArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtosFindUniqueOrThrowArgs>(args: SelectSubset<T, produtosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtosFindFirstArgs>(args?: SelectSubset<T, produtosFindFirstArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtosFindFirstOrThrowArgs>(args?: SelectSubset<T, produtosFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtosWithIdOnly = await prisma.produtos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtosFindManyArgs>(args?: SelectSubset<T, produtosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtos.
     * @param {produtosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
     */
    create<T extends produtosCreateArgs>(args: SelectSubset<T, produtosCreateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtosCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtosCreateManyArgs>(args?: SelectSubset<T, produtosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {produtosCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produtosCreateManyAndReturnArgs>(args?: SelectSubset<T, produtosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produtos.
     * @param {produtosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
     */
    delete<T extends produtosDeleteArgs>(args: SelectSubset<T, produtosDeleteArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtos.
     * @param {produtosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtosUpdateArgs>(args: SelectSubset<T, produtosUpdateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtosDeleteManyArgs>(args?: SelectSubset<T, produtosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtosUpdateManyArgs>(args: SelectSubset<T, produtosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {produtosUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produtosUpdateManyAndReturnArgs>(args: SelectSubset<T, produtosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produtos.
     * @param {produtosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
     */
    upsert<T extends produtosUpsertArgs>(args: SelectSubset<T, produtosUpsertArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtosCountArgs>(
      args?: Subset<T, produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosGroupByArgs} args - Group by arguments.
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
      T extends produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtosGroupByArgs['orderBy'] }
        : { orderBy?: produtosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produtos model
   */
  readonly fields: produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimentacoes<T extends produtos$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, produtos$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posicoes_estoque<T extends produtos$posicoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, produtos$posicoes_estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends produtos$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, produtos$categoriasArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategorias<T extends produtos$subcategoriasArgs<ExtArgs> = {}>(args?: Subset<T, produtos$subcategoriasArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produtos model
   */
  interface produtosFieldRefs {
    readonly id: FieldRef<"produtos", 'Int'>
    readonly nome: FieldRef<"produtos", 'String'>
    readonly sku: FieldRef<"produtos", 'String'>
    readonly peso_unitario: FieldRef<"produtos", 'Decimal'>
    readonly volume: FieldRef<"produtos", 'Decimal'>
    readonly tipo_embalagem: FieldRef<"produtos", 'String'>
    readonly descricao: FieldRef<"produtos", 'String'>
    readonly codigo_barras: FieldRef<"produtos", 'String'>
    readonly preco_custo: FieldRef<"produtos", 'Decimal'>
    readonly preco_venda: FieldRef<"produtos", 'Decimal'>
    readonly estoque_minimo: FieldRef<"produtos", 'Int'>
    readonly estoque_maximo: FieldRef<"produtos", 'Int'>
    readonly ponto_reposicao: FieldRef<"produtos", 'Int'>
    readonly lead_time: FieldRef<"produtos", 'Int'>
    readonly status: FieldRef<"produtos", 'String'>
    readonly unidade_medida: FieldRef<"produtos", 'String'>
    readonly categoria_id: FieldRef<"produtos", 'Int'>
    readonly subcategoria_id: FieldRef<"produtos", 'Int'>
    readonly fornecedor_principal_id: FieldRef<"produtos", 'Int'>
    readonly data_cadastro: FieldRef<"produtos", 'DateTime'>
    readonly imagem_url: FieldRef<"produtos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produtos findUnique
   */
  export type produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findUniqueOrThrow
   */
  export type produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findFirst
   */
  export type produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findFirstOrThrow
   */
  export type produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findMany
   */
  export type produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos create
   */
  export type produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to create a produtos.
     */
    data: XOR<produtosCreateInput, produtosUncheckedCreateInput>
  }

  /**
   * produtos createMany
   */
  export type produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos createManyAndReturn
   */
  export type produtosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produtos update
   */
  export type produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to update a produtos.
     */
    data: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
    /**
     * Choose, which produtos to update.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos updateMany
   */
  export type produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produtos updateManyAndReturn
   */
  export type produtosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produtos upsert
   */
  export type produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The filter to search for the produtos to update in case it exists.
     */
    where: produtosWhereUniqueInput
    /**
     * In case the produtos found by the `where` argument doesn't exist, create a new produtos with this data.
     */
    create: XOR<produtosCreateInput, produtosUncheckedCreateInput>
    /**
     * In case the produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
  }

  /**
   * produtos delete
   */
  export type produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter which produtos to delete.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos deleteMany
   */
  export type produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produtos.movimentacoes
   */
  export type produtos$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    where?: movimentacoesWhereInput
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    cursor?: movimentacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * produtos.posicoes_estoque
   */
  export type produtos$posicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    where?: posicoes_estoqueWhereInput
    orderBy?: posicoes_estoqueOrderByWithRelationInput | posicoes_estoqueOrderByWithRelationInput[]
    cursor?: posicoes_estoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Posicoes_estoqueScalarFieldEnum | Posicoes_estoqueScalarFieldEnum[]
  }

  /**
   * produtos.categorias
   */
  export type produtos$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * produtos.subcategorias
   */
  export type produtos$subcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    where?: subcategoriasWhereInput
  }

  /**
   * produtos without action
   */
  export type produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
  }


  /**
   * Model modelos_moto
   */

  export type AggregateModelos_moto = {
    _count: Modelos_motoCountAggregateOutputType | null
    _avg: Modelos_motoAvgAggregateOutputType | null
    _sum: Modelos_motoSumAggregateOutputType | null
    _min: Modelos_motoMinAggregateOutputType | null
    _max: Modelos_motoMaxAggregateOutputType | null
  }

  export type Modelos_motoAvgAggregateOutputType = {
    id: number | null
    ano_inicio: number | null
    ano_fim: number | null
    cilindrada: number | null
  }

  export type Modelos_motoSumAggregateOutputType = {
    id: number | null
    ano_inicio: number | null
    ano_fim: number | null
    cilindrada: number | null
  }

  export type Modelos_motoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    marca: string | null
    ano_inicio: number | null
    ano_fim: number | null
    cilindrada: number | null
    tipo: string | null
    descricao: string | null
    imagem_url: string | null
    status: string | null
    data_cadastro: Date | null
  }

  export type Modelos_motoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    marca: string | null
    ano_inicio: number | null
    ano_fim: number | null
    cilindrada: number | null
    tipo: string | null
    descricao: string | null
    imagem_url: string | null
    status: string | null
    data_cadastro: Date | null
  }

  export type Modelos_motoCountAggregateOutputType = {
    id: number
    nome: number
    marca: number
    ano_inicio: number
    ano_fim: number
    cilindrada: number
    tipo: number
    descricao: number
    imagem_url: number
    status: number
    data_cadastro: number
    _all: number
  }


  export type Modelos_motoAvgAggregateInputType = {
    id?: true
    ano_inicio?: true
    ano_fim?: true
    cilindrada?: true
  }

  export type Modelos_motoSumAggregateInputType = {
    id?: true
    ano_inicio?: true
    ano_fim?: true
    cilindrada?: true
  }

  export type Modelos_motoMinAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    ano_inicio?: true
    ano_fim?: true
    cilindrada?: true
    tipo?: true
    descricao?: true
    imagem_url?: true
    status?: true
    data_cadastro?: true
  }

  export type Modelos_motoMaxAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    ano_inicio?: true
    ano_fim?: true
    cilindrada?: true
    tipo?: true
    descricao?: true
    imagem_url?: true
    status?: true
    data_cadastro?: true
  }

  export type Modelos_motoCountAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    ano_inicio?: true
    ano_fim?: true
    cilindrada?: true
    tipo?: true
    descricao?: true
    imagem_url?: true
    status?: true
    data_cadastro?: true
    _all?: true
  }

  export type Modelos_motoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modelos_moto to aggregate.
     */
    where?: modelos_motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modelos_motos to fetch.
     */
    orderBy?: modelos_motoOrderByWithRelationInput | modelos_motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modelos_motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modelos_motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modelos_motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modelos_motos
    **/
    _count?: true | Modelos_motoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Modelos_motoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Modelos_motoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Modelos_motoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Modelos_motoMaxAggregateInputType
  }

  export type GetModelos_motoAggregateType<T extends Modelos_motoAggregateArgs> = {
        [P in keyof T & keyof AggregateModelos_moto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelos_moto[P]>
      : GetScalarType<T[P], AggregateModelos_moto[P]>
  }




  export type modelos_motoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modelos_motoWhereInput
    orderBy?: modelos_motoOrderByWithAggregationInput | modelos_motoOrderByWithAggregationInput[]
    by: Modelos_motoScalarFieldEnum[] | Modelos_motoScalarFieldEnum
    having?: modelos_motoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Modelos_motoCountAggregateInputType | true
    _avg?: Modelos_motoAvgAggregateInputType
    _sum?: Modelos_motoSumAggregateInputType
    _min?: Modelos_motoMinAggregateInputType
    _max?: Modelos_motoMaxAggregateInputType
  }

  export type Modelos_motoGroupByOutputType = {
    id: number
    nome: string
    marca: string | null
    ano_inicio: number | null
    ano_fim: number | null
    cilindrada: number | null
    tipo: string | null
    descricao: string | null
    imagem_url: string | null
    status: string | null
    data_cadastro: Date | null
    _count: Modelos_motoCountAggregateOutputType | null
    _avg: Modelos_motoAvgAggregateOutputType | null
    _sum: Modelos_motoSumAggregateOutputType | null
    _min: Modelos_motoMinAggregateOutputType | null
    _max: Modelos_motoMaxAggregateOutputType | null
  }

  type GetModelos_motoGroupByPayload<T extends modelos_motoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Modelos_motoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Modelos_motoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Modelos_motoGroupByOutputType[P]>
            : GetScalarType<T[P], Modelos_motoGroupByOutputType[P]>
        }
      >
    >


  export type modelos_motoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    ano_inicio?: boolean
    ano_fim?: boolean
    cilindrada?: boolean
    tipo?: boolean
    descricao?: boolean
    imagem_url?: boolean
    status?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["modelos_moto"]>

  export type modelos_motoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    ano_inicio?: boolean
    ano_fim?: boolean
    cilindrada?: boolean
    tipo?: boolean
    descricao?: boolean
    imagem_url?: boolean
    status?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["modelos_moto"]>

  export type modelos_motoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    ano_inicio?: boolean
    ano_fim?: boolean
    cilindrada?: boolean
    tipo?: boolean
    descricao?: boolean
    imagem_url?: boolean
    status?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["modelos_moto"]>

  export type modelos_motoSelectScalar = {
    id?: boolean
    nome?: boolean
    marca?: boolean
    ano_inicio?: boolean
    ano_fim?: boolean
    cilindrada?: boolean
    tipo?: boolean
    descricao?: boolean
    imagem_url?: boolean
    status?: boolean
    data_cadastro?: boolean
  }

  export type modelos_motoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "marca" | "ano_inicio" | "ano_fim" | "cilindrada" | "tipo" | "descricao" | "imagem_url" | "status" | "data_cadastro", ExtArgs["result"]["modelos_moto"]>

  export type $modelos_motoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modelos_moto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      marca: string | null
      ano_inicio: number | null
      ano_fim: number | null
      cilindrada: number | null
      tipo: string | null
      descricao: string | null
      imagem_url: string | null
      status: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["modelos_moto"]>
    composites: {}
  }

  type modelos_motoGetPayload<S extends boolean | null | undefined | modelos_motoDefaultArgs> = $Result.GetResult<Prisma.$modelos_motoPayload, S>

  type modelos_motoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modelos_motoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Modelos_motoCountAggregateInputType | true
    }

  export interface modelos_motoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modelos_moto'], meta: { name: 'modelos_moto' } }
    /**
     * Find zero or one Modelos_moto that matches the filter.
     * @param {modelos_motoFindUniqueArgs} args - Arguments to find a Modelos_moto
     * @example
     * // Get one Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modelos_motoFindUniqueArgs>(args: SelectSubset<T, modelos_motoFindUniqueArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modelos_moto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modelos_motoFindUniqueOrThrowArgs} args - Arguments to find a Modelos_moto
     * @example
     * // Get one Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modelos_motoFindUniqueOrThrowArgs>(args: SelectSubset<T, modelos_motoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modelos_moto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoFindFirstArgs} args - Arguments to find a Modelos_moto
     * @example
     * // Get one Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modelos_motoFindFirstArgs>(args?: SelectSubset<T, modelos_motoFindFirstArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modelos_moto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoFindFirstOrThrowArgs} args - Arguments to find a Modelos_moto
     * @example
     * // Get one Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modelos_motoFindFirstOrThrowArgs>(args?: SelectSubset<T, modelos_motoFindFirstOrThrowArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modelos_motos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modelos_motos
     * const modelos_motos = await prisma.modelos_moto.findMany()
     * 
     * // Get first 10 Modelos_motos
     * const modelos_motos = await prisma.modelos_moto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelos_motoWithIdOnly = await prisma.modelos_moto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modelos_motoFindManyArgs>(args?: SelectSubset<T, modelos_motoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modelos_moto.
     * @param {modelos_motoCreateArgs} args - Arguments to create a Modelos_moto.
     * @example
     * // Create one Modelos_moto
     * const Modelos_moto = await prisma.modelos_moto.create({
     *   data: {
     *     // ... data to create a Modelos_moto
     *   }
     * })
     * 
     */
    create<T extends modelos_motoCreateArgs>(args: SelectSubset<T, modelos_motoCreateArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modelos_motos.
     * @param {modelos_motoCreateManyArgs} args - Arguments to create many Modelos_motos.
     * @example
     * // Create many Modelos_motos
     * const modelos_moto = await prisma.modelos_moto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modelos_motoCreateManyArgs>(args?: SelectSubset<T, modelos_motoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modelos_motos and returns the data saved in the database.
     * @param {modelos_motoCreateManyAndReturnArgs} args - Arguments to create many Modelos_motos.
     * @example
     * // Create many Modelos_motos
     * const modelos_moto = await prisma.modelos_moto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modelos_motos and only return the `id`
     * const modelos_motoWithIdOnly = await prisma.modelos_moto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends modelos_motoCreateManyAndReturnArgs>(args?: SelectSubset<T, modelos_motoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modelos_moto.
     * @param {modelos_motoDeleteArgs} args - Arguments to delete one Modelos_moto.
     * @example
     * // Delete one Modelos_moto
     * const Modelos_moto = await prisma.modelos_moto.delete({
     *   where: {
     *     // ... filter to delete one Modelos_moto
     *   }
     * })
     * 
     */
    delete<T extends modelos_motoDeleteArgs>(args: SelectSubset<T, modelos_motoDeleteArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modelos_moto.
     * @param {modelos_motoUpdateArgs} args - Arguments to update one Modelos_moto.
     * @example
     * // Update one Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modelos_motoUpdateArgs>(args: SelectSubset<T, modelos_motoUpdateArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modelos_motos.
     * @param {modelos_motoDeleteManyArgs} args - Arguments to filter Modelos_motos to delete.
     * @example
     * // Delete a few Modelos_motos
     * const { count } = await prisma.modelos_moto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modelos_motoDeleteManyArgs>(args?: SelectSubset<T, modelos_motoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modelos_motos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modelos_motos
     * const modelos_moto = await prisma.modelos_moto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modelos_motoUpdateManyArgs>(args: SelectSubset<T, modelos_motoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modelos_motos and returns the data updated in the database.
     * @param {modelos_motoUpdateManyAndReturnArgs} args - Arguments to update many Modelos_motos.
     * @example
     * // Update many Modelos_motos
     * const modelos_moto = await prisma.modelos_moto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modelos_motos and only return the `id`
     * const modelos_motoWithIdOnly = await prisma.modelos_moto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends modelos_motoUpdateManyAndReturnArgs>(args: SelectSubset<T, modelos_motoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modelos_moto.
     * @param {modelos_motoUpsertArgs} args - Arguments to update or create a Modelos_moto.
     * @example
     * // Update or create a Modelos_moto
     * const modelos_moto = await prisma.modelos_moto.upsert({
     *   create: {
     *     // ... data to create a Modelos_moto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modelos_moto we want to update
     *   }
     * })
     */
    upsert<T extends modelos_motoUpsertArgs>(args: SelectSubset<T, modelos_motoUpsertArgs<ExtArgs>>): Prisma__modelos_motoClient<$Result.GetResult<Prisma.$modelos_motoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modelos_motos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoCountArgs} args - Arguments to filter Modelos_motos to count.
     * @example
     * // Count the number of Modelos_motos
     * const count = await prisma.modelos_moto.count({
     *   where: {
     *     // ... the filter for the Modelos_motos we want to count
     *   }
     * })
    **/
    count<T extends modelos_motoCountArgs>(
      args?: Subset<T, modelos_motoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Modelos_motoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modelos_moto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Modelos_motoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Modelos_motoAggregateArgs>(args: Subset<T, Modelos_motoAggregateArgs>): Prisma.PrismaPromise<GetModelos_motoAggregateType<T>>

    /**
     * Group by Modelos_moto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelos_motoGroupByArgs} args - Group by arguments.
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
      T extends modelos_motoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modelos_motoGroupByArgs['orderBy'] }
        : { orderBy?: modelos_motoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modelos_motoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelos_motoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modelos_moto model
   */
  readonly fields: modelos_motoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modelos_moto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modelos_motoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the modelos_moto model
   */
  interface modelos_motoFieldRefs {
    readonly id: FieldRef<"modelos_moto", 'Int'>
    readonly nome: FieldRef<"modelos_moto", 'String'>
    readonly marca: FieldRef<"modelos_moto", 'String'>
    readonly ano_inicio: FieldRef<"modelos_moto", 'Int'>
    readonly ano_fim: FieldRef<"modelos_moto", 'Int'>
    readonly cilindrada: FieldRef<"modelos_moto", 'Int'>
    readonly tipo: FieldRef<"modelos_moto", 'String'>
    readonly descricao: FieldRef<"modelos_moto", 'String'>
    readonly imagem_url: FieldRef<"modelos_moto", 'String'>
    readonly status: FieldRef<"modelos_moto", 'String'>
    readonly data_cadastro: FieldRef<"modelos_moto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * modelos_moto findUnique
   */
  export type modelos_motoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter, which modelos_moto to fetch.
     */
    where: modelos_motoWhereUniqueInput
  }

  /**
   * modelos_moto findUniqueOrThrow
   */
  export type modelos_motoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter, which modelos_moto to fetch.
     */
    where: modelos_motoWhereUniqueInput
  }

  /**
   * modelos_moto findFirst
   */
  export type modelos_motoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter, which modelos_moto to fetch.
     */
    where?: modelos_motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modelos_motos to fetch.
     */
    orderBy?: modelos_motoOrderByWithRelationInput | modelos_motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modelos_motos.
     */
    cursor?: modelos_motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modelos_motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modelos_motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modelos_motos.
     */
    distinct?: Modelos_motoScalarFieldEnum | Modelos_motoScalarFieldEnum[]
  }

  /**
   * modelos_moto findFirstOrThrow
   */
  export type modelos_motoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter, which modelos_moto to fetch.
     */
    where?: modelos_motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modelos_motos to fetch.
     */
    orderBy?: modelos_motoOrderByWithRelationInput | modelos_motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modelos_motos.
     */
    cursor?: modelos_motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modelos_motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modelos_motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modelos_motos.
     */
    distinct?: Modelos_motoScalarFieldEnum | Modelos_motoScalarFieldEnum[]
  }

  /**
   * modelos_moto findMany
   */
  export type modelos_motoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter, which modelos_motos to fetch.
     */
    where?: modelos_motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modelos_motos to fetch.
     */
    orderBy?: modelos_motoOrderByWithRelationInput | modelos_motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modelos_motos.
     */
    cursor?: modelos_motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modelos_motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modelos_motos.
     */
    skip?: number
    distinct?: Modelos_motoScalarFieldEnum | Modelos_motoScalarFieldEnum[]
  }

  /**
   * modelos_moto create
   */
  export type modelos_motoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * The data needed to create a modelos_moto.
     */
    data: XOR<modelos_motoCreateInput, modelos_motoUncheckedCreateInput>
  }

  /**
   * modelos_moto createMany
   */
  export type modelos_motoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modelos_motos.
     */
    data: modelos_motoCreateManyInput | modelos_motoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modelos_moto createManyAndReturn
   */
  export type modelos_motoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * The data used to create many modelos_motos.
     */
    data: modelos_motoCreateManyInput | modelos_motoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modelos_moto update
   */
  export type modelos_motoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * The data needed to update a modelos_moto.
     */
    data: XOR<modelos_motoUpdateInput, modelos_motoUncheckedUpdateInput>
    /**
     * Choose, which modelos_moto to update.
     */
    where: modelos_motoWhereUniqueInput
  }

  /**
   * modelos_moto updateMany
   */
  export type modelos_motoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modelos_motos.
     */
    data: XOR<modelos_motoUpdateManyMutationInput, modelos_motoUncheckedUpdateManyInput>
    /**
     * Filter which modelos_motos to update
     */
    where?: modelos_motoWhereInput
    /**
     * Limit how many modelos_motos to update.
     */
    limit?: number
  }

  /**
   * modelos_moto updateManyAndReturn
   */
  export type modelos_motoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * The data used to update modelos_motos.
     */
    data: XOR<modelos_motoUpdateManyMutationInput, modelos_motoUncheckedUpdateManyInput>
    /**
     * Filter which modelos_motos to update
     */
    where?: modelos_motoWhereInput
    /**
     * Limit how many modelos_motos to update.
     */
    limit?: number
  }

  /**
   * modelos_moto upsert
   */
  export type modelos_motoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * The filter to search for the modelos_moto to update in case it exists.
     */
    where: modelos_motoWhereUniqueInput
    /**
     * In case the modelos_moto found by the `where` argument doesn't exist, create a new modelos_moto with this data.
     */
    create: XOR<modelos_motoCreateInput, modelos_motoUncheckedCreateInput>
    /**
     * In case the modelos_moto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modelos_motoUpdateInput, modelos_motoUncheckedUpdateInput>
  }

  /**
   * modelos_moto delete
   */
  export type modelos_motoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
    /**
     * Filter which modelos_moto to delete.
     */
    where: modelos_motoWhereUniqueInput
  }

  /**
   * modelos_moto deleteMany
   */
  export type modelos_motoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modelos_motos to delete
     */
    where?: modelos_motoWhereInput
    /**
     * Limit how many modelos_motos to delete.
     */
    limit?: number
  }

  /**
   * modelos_moto without action
   */
  export type modelos_motoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modelos_moto
     */
    select?: modelos_motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modelos_moto
     */
    omit?: modelos_motoOmit<ExtArgs> | null
  }


  /**
   * Model movimentacoes
   */

  export type AggregateMovimentacoes = {
    _count: MovimentacoesCountAggregateOutputType | null
    _avg: MovimentacoesAvgAggregateOutputType | null
    _sum: MovimentacoesSumAggregateOutputType | null
    _min: MovimentacoesMinAggregateOutputType | null
    _max: MovimentacoesMaxAggregateOutputType | null
  }

  export type MovimentacoesAvgAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    posicao_origem_id: number | null
    posicao_destino_id: number | null
    quantidade: number | null
    responsavel_id: number | null
    documento_id: number | null
    custo_unitario: Decimal | null
  }

  export type MovimentacoesSumAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    posicao_origem_id: number | null
    posicao_destino_id: number | null
    quantidade: number | null
    responsavel_id: number | null
    documento_id: number | null
    custo_unitario: Decimal | null
  }

  export type MovimentacoesMinAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    posicao_origem_id: number | null
    posicao_destino_id: number | null
    tipo: string | null
    quantidade: number | null
    data_hora: Date | null
    responsavel_id: number | null
    documento_id: number | null
    motivo: string | null
    observacoes: string | null
    custo_unitario: Decimal | null
  }

  export type MovimentacoesMaxAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    posicao_origem_id: number | null
    posicao_destino_id: number | null
    tipo: string | null
    quantidade: number | null
    data_hora: Date | null
    responsavel_id: number | null
    documento_id: number | null
    motivo: string | null
    observacoes: string | null
    custo_unitario: Decimal | null
  }

  export type MovimentacoesCountAggregateOutputType = {
    id: number
    produto_id: number
    lote_id: number
    posicao_origem_id: number
    posicao_destino_id: number
    tipo: number
    quantidade: number
    data_hora: number
    responsavel_id: number
    documento_id: number
    motivo: number
    observacoes: number
    custo_unitario: number
    _all: number
  }


  export type MovimentacoesAvgAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    posicao_origem_id?: true
    posicao_destino_id?: true
    quantidade?: true
    responsavel_id?: true
    documento_id?: true
    custo_unitario?: true
  }

  export type MovimentacoesSumAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    posicao_origem_id?: true
    posicao_destino_id?: true
    quantidade?: true
    responsavel_id?: true
    documento_id?: true
    custo_unitario?: true
  }

  export type MovimentacoesMinAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    posicao_origem_id?: true
    posicao_destino_id?: true
    tipo?: true
    quantidade?: true
    data_hora?: true
    responsavel_id?: true
    documento_id?: true
    motivo?: true
    observacoes?: true
    custo_unitario?: true
  }

  export type MovimentacoesMaxAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    posicao_origem_id?: true
    posicao_destino_id?: true
    tipo?: true
    quantidade?: true
    data_hora?: true
    responsavel_id?: true
    documento_id?: true
    motivo?: true
    observacoes?: true
    custo_unitario?: true
  }

  export type MovimentacoesCountAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    posicao_origem_id?: true
    posicao_destino_id?: true
    tipo?: true
    quantidade?: true
    data_hora?: true
    responsavel_id?: true
    documento_id?: true
    motivo?: true
    observacoes?: true
    custo_unitario?: true
    _all?: true
  }

  export type MovimentacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimentacoes to aggregate.
     */
    where?: movimentacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimentacoes to fetch.
     */
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimentacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimentacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimentacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimentacoes
    **/
    _count?: true | MovimentacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacoesMaxAggregateInputType
  }

  export type GetMovimentacoesAggregateType<T extends MovimentacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacoes[P]>
      : GetScalarType<T[P], AggregateMovimentacoes[P]>
  }




  export type movimentacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimentacoesWhereInput
    orderBy?: movimentacoesOrderByWithAggregationInput | movimentacoesOrderByWithAggregationInput[]
    by: MovimentacoesScalarFieldEnum[] | MovimentacoesScalarFieldEnum
    having?: movimentacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacoesCountAggregateInputType | true
    _avg?: MovimentacoesAvgAggregateInputType
    _sum?: MovimentacoesSumAggregateInputType
    _min?: MovimentacoesMinAggregateInputType
    _max?: MovimentacoesMaxAggregateInputType
  }

  export type MovimentacoesGroupByOutputType = {
    id: number
    produto_id: number
    lote_id: number | null
    posicao_origem_id: number | null
    posicao_destino_id: number | null
    tipo: string | null
    quantidade: number
    data_hora: Date
    responsavel_id: number | null
    documento_id: number | null
    motivo: string | null
    observacoes: string | null
    custo_unitario: Decimal | null
    _count: MovimentacoesCountAggregateOutputType | null
    _avg: MovimentacoesAvgAggregateOutputType | null
    _sum: MovimentacoesSumAggregateOutputType | null
    _min: MovimentacoesMinAggregateOutputType | null
    _max: MovimentacoesMaxAggregateOutputType | null
  }

  type GetMovimentacoesGroupByPayload<T extends movimentacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacoesGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacoesGroupByOutputType[P]>
        }
      >
    >


  export type movimentacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    lote_id?: boolean
    posicao_origem_id?: boolean
    posicao_destino_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_hora?: boolean
    responsavel_id?: boolean
    documento_id?: boolean
    motivo?: boolean
    observacoes?: boolean
    custo_unitario?: boolean
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacoes"]>

  export type movimentacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    lote_id?: boolean
    posicao_origem_id?: boolean
    posicao_destino_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_hora?: boolean
    responsavel_id?: boolean
    documento_id?: boolean
    motivo?: boolean
    observacoes?: boolean
    custo_unitario?: boolean
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacoes"]>

  export type movimentacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    lote_id?: boolean
    posicao_origem_id?: boolean
    posicao_destino_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_hora?: boolean
    responsavel_id?: boolean
    documento_id?: boolean
    motivo?: boolean
    observacoes?: boolean
    custo_unitario?: boolean
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacoes"]>

  export type movimentacoesSelectScalar = {
    id?: boolean
    produto_id?: boolean
    lote_id?: boolean
    posicao_origem_id?: boolean
    posicao_destino_id?: boolean
    tipo?: boolean
    quantidade?: boolean
    data_hora?: boolean
    responsavel_id?: boolean
    documento_id?: boolean
    motivo?: boolean
    observacoes?: boolean
    custo_unitario?: boolean
  }

  export type movimentacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "lote_id" | "posicao_origem_id" | "posicao_destino_id" | "tipo" | "quantidade" | "data_hora" | "responsavel_id" | "documento_id" | "motivo" | "observacoes" | "custo_unitario", ExtArgs["result"]["movimentacoes"]>
  export type movimentacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type movimentacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type movimentacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }

  export type $movimentacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimentacoes"
    objects: {
      posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque: Prisma.$posicoes_estoquePayload<ExtArgs> | null
      posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque: Prisma.$posicoes_estoquePayload<ExtArgs> | null
      produtos: Prisma.$produtosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produto_id: number
      lote_id: number | null
      posicao_origem_id: number | null
      posicao_destino_id: number | null
      tipo: string | null
      quantidade: number
      data_hora: Date
      responsavel_id: number | null
      documento_id: number | null
      motivo: string | null
      observacoes: string | null
      custo_unitario: Prisma.Decimal | null
    }, ExtArgs["result"]["movimentacoes"]>
    composites: {}
  }

  type movimentacoesGetPayload<S extends boolean | null | undefined | movimentacoesDefaultArgs> = $Result.GetResult<Prisma.$movimentacoesPayload, S>

  type movimentacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movimentacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacoesCountAggregateInputType | true
    }

  export interface movimentacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimentacoes'], meta: { name: 'movimentacoes' } }
    /**
     * Find zero or one Movimentacoes that matches the filter.
     * @param {movimentacoesFindUniqueArgs} args - Arguments to find a Movimentacoes
     * @example
     * // Get one Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimentacoesFindUniqueArgs>(args: SelectSubset<T, movimentacoesFindUniqueArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movimentacoesFindUniqueOrThrowArgs} args - Arguments to find a Movimentacoes
     * @example
     * // Get one Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimentacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, movimentacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesFindFirstArgs} args - Arguments to find a Movimentacoes
     * @example
     * // Get one Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimentacoesFindFirstArgs>(args?: SelectSubset<T, movimentacoesFindFirstArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesFindFirstOrThrowArgs} args - Arguments to find a Movimentacoes
     * @example
     * // Get one Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimentacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, movimentacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findMany()
     * 
     * // Get first 10 Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacoesWithIdOnly = await prisma.movimentacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movimentacoesFindManyArgs>(args?: SelectSubset<T, movimentacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacoes.
     * @param {movimentacoesCreateArgs} args - Arguments to create a Movimentacoes.
     * @example
     * // Create one Movimentacoes
     * const Movimentacoes = await prisma.movimentacoes.create({
     *   data: {
     *     // ... data to create a Movimentacoes
     *   }
     * })
     * 
     */
    create<T extends movimentacoesCreateArgs>(args: SelectSubset<T, movimentacoesCreateArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacoes.
     * @param {movimentacoesCreateManyArgs} args - Arguments to create many Movimentacoes.
     * @example
     * // Create many Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimentacoesCreateManyArgs>(args?: SelectSubset<T, movimentacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimentacoes and returns the data saved in the database.
     * @param {movimentacoesCreateManyAndReturnArgs} args - Arguments to create many Movimentacoes.
     * @example
     * // Create many Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimentacoes and only return the `id`
     * const movimentacoesWithIdOnly = await prisma.movimentacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movimentacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, movimentacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimentacoes.
     * @param {movimentacoesDeleteArgs} args - Arguments to delete one Movimentacoes.
     * @example
     * // Delete one Movimentacoes
     * const Movimentacoes = await prisma.movimentacoes.delete({
     *   where: {
     *     // ... filter to delete one Movimentacoes
     *   }
     * })
     * 
     */
    delete<T extends movimentacoesDeleteArgs>(args: SelectSubset<T, movimentacoesDeleteArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacoes.
     * @param {movimentacoesUpdateArgs} args - Arguments to update one Movimentacoes.
     * @example
     * // Update one Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimentacoesUpdateArgs>(args: SelectSubset<T, movimentacoesUpdateArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacoes.
     * @param {movimentacoesDeleteManyArgs} args - Arguments to filter Movimentacoes to delete.
     * @example
     * // Delete a few Movimentacoes
     * const { count } = await prisma.movimentacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimentacoesDeleteManyArgs>(args?: SelectSubset<T, movimentacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimentacoesUpdateManyArgs>(args: SelectSubset<T, movimentacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacoes and returns the data updated in the database.
     * @param {movimentacoesUpdateManyAndReturnArgs} args - Arguments to update many Movimentacoes.
     * @example
     * // Update many Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimentacoes and only return the `id`
     * const movimentacoesWithIdOnly = await prisma.movimentacoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends movimentacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, movimentacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimentacoes.
     * @param {movimentacoesUpsertArgs} args - Arguments to update or create a Movimentacoes.
     * @example
     * // Update or create a Movimentacoes
     * const movimentacoes = await prisma.movimentacoes.upsert({
     *   create: {
     *     // ... data to create a Movimentacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacoes we want to update
     *   }
     * })
     */
    upsert<T extends movimentacoesUpsertArgs>(args: SelectSubset<T, movimentacoesUpsertArgs<ExtArgs>>): Prisma__movimentacoesClient<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimentacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesCountArgs} args - Arguments to filter Movimentacoes to count.
     * @example
     * // Count the number of Movimentacoes
     * const count = await prisma.movimentacoes.count({
     *   where: {
     *     // ... the filter for the Movimentacoes we want to count
     *   }
     * })
    **/
    count<T extends movimentacoesCountArgs>(
      args?: Subset<T, movimentacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacoesAggregateArgs>(args: Subset<T, MovimentacoesAggregateArgs>): Prisma.PrismaPromise<GetMovimentacoesAggregateType<T>>

    /**
     * Group by Movimentacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimentacoesGroupByArgs} args - Group by arguments.
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
      T extends movimentacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimentacoesGroupByArgs['orderBy'] }
        : { orderBy?: movimentacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, movimentacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimentacoes model
   */
  readonly fields: movimentacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimentacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimentacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque<T extends movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque<T extends movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produtos<T extends produtosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtosDefaultArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movimentacoes model
   */
  interface movimentacoesFieldRefs {
    readonly id: FieldRef<"movimentacoes", 'Int'>
    readonly produto_id: FieldRef<"movimentacoes", 'Int'>
    readonly lote_id: FieldRef<"movimentacoes", 'Int'>
    readonly posicao_origem_id: FieldRef<"movimentacoes", 'Int'>
    readonly posicao_destino_id: FieldRef<"movimentacoes", 'Int'>
    readonly tipo: FieldRef<"movimentacoes", 'String'>
    readonly quantidade: FieldRef<"movimentacoes", 'Int'>
    readonly data_hora: FieldRef<"movimentacoes", 'DateTime'>
    readonly responsavel_id: FieldRef<"movimentacoes", 'Int'>
    readonly documento_id: FieldRef<"movimentacoes", 'Int'>
    readonly motivo: FieldRef<"movimentacoes", 'String'>
    readonly observacoes: FieldRef<"movimentacoes", 'String'>
    readonly custo_unitario: FieldRef<"movimentacoes", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * movimentacoes findUnique
   */
  export type movimentacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter, which movimentacoes to fetch.
     */
    where: movimentacoesWhereUniqueInput
  }

  /**
   * movimentacoes findUniqueOrThrow
   */
  export type movimentacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter, which movimentacoes to fetch.
     */
    where: movimentacoesWhereUniqueInput
  }

  /**
   * movimentacoes findFirst
   */
  export type movimentacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter, which movimentacoes to fetch.
     */
    where?: movimentacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimentacoes to fetch.
     */
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimentacoes.
     */
    cursor?: movimentacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimentacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimentacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimentacoes.
     */
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * movimentacoes findFirstOrThrow
   */
  export type movimentacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter, which movimentacoes to fetch.
     */
    where?: movimentacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimentacoes to fetch.
     */
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimentacoes.
     */
    cursor?: movimentacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimentacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimentacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimentacoes.
     */
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * movimentacoes findMany
   */
  export type movimentacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter, which movimentacoes to fetch.
     */
    where?: movimentacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimentacoes to fetch.
     */
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimentacoes.
     */
    cursor?: movimentacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimentacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimentacoes.
     */
    skip?: number
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * movimentacoes create
   */
  export type movimentacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a movimentacoes.
     */
    data: XOR<movimentacoesCreateInput, movimentacoesUncheckedCreateInput>
  }

  /**
   * movimentacoes createMany
   */
  export type movimentacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimentacoes.
     */
    data: movimentacoesCreateManyInput | movimentacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimentacoes createManyAndReturn
   */
  export type movimentacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * The data used to create many movimentacoes.
     */
    data: movimentacoesCreateManyInput | movimentacoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimentacoes update
   */
  export type movimentacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a movimentacoes.
     */
    data: XOR<movimentacoesUpdateInput, movimentacoesUncheckedUpdateInput>
    /**
     * Choose, which movimentacoes to update.
     */
    where: movimentacoesWhereUniqueInput
  }

  /**
   * movimentacoes updateMany
   */
  export type movimentacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimentacoes.
     */
    data: XOR<movimentacoesUpdateManyMutationInput, movimentacoesUncheckedUpdateManyInput>
    /**
     * Filter which movimentacoes to update
     */
    where?: movimentacoesWhereInput
    /**
     * Limit how many movimentacoes to update.
     */
    limit?: number
  }

  /**
   * movimentacoes updateManyAndReturn
   */
  export type movimentacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * The data used to update movimentacoes.
     */
    data: XOR<movimentacoesUpdateManyMutationInput, movimentacoesUncheckedUpdateManyInput>
    /**
     * Filter which movimentacoes to update
     */
    where?: movimentacoesWhereInput
    /**
     * Limit how many movimentacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimentacoes upsert
   */
  export type movimentacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the movimentacoes to update in case it exists.
     */
    where: movimentacoesWhereUniqueInput
    /**
     * In case the movimentacoes found by the `where` argument doesn't exist, create a new movimentacoes with this data.
     */
    create: XOR<movimentacoesCreateInput, movimentacoesUncheckedCreateInput>
    /**
     * In case the movimentacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimentacoesUpdateInput, movimentacoesUncheckedUpdateInput>
  }

  /**
   * movimentacoes delete
   */
  export type movimentacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    /**
     * Filter which movimentacoes to delete.
     */
    where: movimentacoesWhereUniqueInput
  }

  /**
   * movimentacoes deleteMany
   */
  export type movimentacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimentacoes to delete
     */
    where?: movimentacoesWhereInput
    /**
     * Limit how many movimentacoes to delete.
     */
    limit?: number
  }

  /**
   * movimentacoes.posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque
   */
  export type movimentacoes$posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    where?: posicoes_estoqueWhereInput
  }

  /**
   * movimentacoes.posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque
   */
  export type movimentacoes$posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    where?: posicoes_estoqueWhereInput
  }

  /**
   * movimentacoes without action
   */
  export type movimentacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
  }


  /**
   * Model posicoes_estoque
   */

  export type AggregatePosicoes_estoque = {
    _count: Posicoes_estoqueCountAggregateOutputType | null
    _avg: Posicoes_estoqueAvgAggregateOutputType | null
    _sum: Posicoes_estoqueSumAggregateOutputType | null
    _min: Posicoes_estoqueMinAggregateOutputType | null
    _max: Posicoes_estoqueMaxAggregateOutputType | null
  }

  export type Posicoes_estoqueAvgAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    quantidade: number | null
    capacidade_maxima: number | null
  }

  export type Posicoes_estoqueSumAggregateOutputType = {
    id: number | null
    produto_id: number | null
    lote_id: number | null
    quantidade: number | null
    capacidade_maxima: number | null
  }

  export type Posicoes_estoqueMinAggregateOutputType = {
    id: number | null
    endereco: string | null
    status: string | null
    produto_id: number | null
    lote_id: number | null
    quantidade: number | null
    ultima_movimentacao: Date | null
    observacoes: string | null
    capacidade_maxima: number | null
    tipo_posicao: string | null
  }

  export type Posicoes_estoqueMaxAggregateOutputType = {
    id: number | null
    endereco: string | null
    status: string | null
    produto_id: number | null
    lote_id: number | null
    quantidade: number | null
    ultima_movimentacao: Date | null
    observacoes: string | null
    capacidade_maxima: number | null
    tipo_posicao: string | null
  }

  export type Posicoes_estoqueCountAggregateOutputType = {
    id: number
    endereco: number
    status: number
    produto_id: number
    lote_id: number
    quantidade: number
    ultima_movimentacao: number
    observacoes: number
    capacidade_maxima: number
    tipo_posicao: number
    _all: number
  }


  export type Posicoes_estoqueAvgAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    quantidade?: true
    capacidade_maxima?: true
  }

  export type Posicoes_estoqueSumAggregateInputType = {
    id?: true
    produto_id?: true
    lote_id?: true
    quantidade?: true
    capacidade_maxima?: true
  }

  export type Posicoes_estoqueMinAggregateInputType = {
    id?: true
    endereco?: true
    status?: true
    produto_id?: true
    lote_id?: true
    quantidade?: true
    ultima_movimentacao?: true
    observacoes?: true
    capacidade_maxima?: true
    tipo_posicao?: true
  }

  export type Posicoes_estoqueMaxAggregateInputType = {
    id?: true
    endereco?: true
    status?: true
    produto_id?: true
    lote_id?: true
    quantidade?: true
    ultima_movimentacao?: true
    observacoes?: true
    capacidade_maxima?: true
    tipo_posicao?: true
  }

  export type Posicoes_estoqueCountAggregateInputType = {
    id?: true
    endereco?: true
    status?: true
    produto_id?: true
    lote_id?: true
    quantidade?: true
    ultima_movimentacao?: true
    observacoes?: true
    capacidade_maxima?: true
    tipo_posicao?: true
    _all?: true
  }

  export type Posicoes_estoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posicoes_estoque to aggregate.
     */
    where?: posicoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicoes_estoques to fetch.
     */
    orderBy?: posicoes_estoqueOrderByWithRelationInput | posicoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posicoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posicoes_estoques
    **/
    _count?: true | Posicoes_estoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posicoes_estoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posicoes_estoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posicoes_estoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posicoes_estoqueMaxAggregateInputType
  }

  export type GetPosicoes_estoqueAggregateType<T extends Posicoes_estoqueAggregateArgs> = {
        [P in keyof T & keyof AggregatePosicoes_estoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosicoes_estoque[P]>
      : GetScalarType<T[P], AggregatePosicoes_estoque[P]>
  }




  export type posicoes_estoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posicoes_estoqueWhereInput
    orderBy?: posicoes_estoqueOrderByWithAggregationInput | posicoes_estoqueOrderByWithAggregationInput[]
    by: Posicoes_estoqueScalarFieldEnum[] | Posicoes_estoqueScalarFieldEnum
    having?: posicoes_estoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posicoes_estoqueCountAggregateInputType | true
    _avg?: Posicoes_estoqueAvgAggregateInputType
    _sum?: Posicoes_estoqueSumAggregateInputType
    _min?: Posicoes_estoqueMinAggregateInputType
    _max?: Posicoes_estoqueMaxAggregateInputType
  }

  export type Posicoes_estoqueGroupByOutputType = {
    id: number
    endereco: string
    status: string | null
    produto_id: number | null
    lote_id: number | null
    quantidade: number | null
    ultima_movimentacao: Date | null
    observacoes: string | null
    capacidade_maxima: number | null
    tipo_posicao: string | null
    _count: Posicoes_estoqueCountAggregateOutputType | null
    _avg: Posicoes_estoqueAvgAggregateOutputType | null
    _sum: Posicoes_estoqueSumAggregateOutputType | null
    _min: Posicoes_estoqueMinAggregateOutputType | null
    _max: Posicoes_estoqueMaxAggregateOutputType | null
  }

  type GetPosicoes_estoqueGroupByPayload<T extends posicoes_estoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posicoes_estoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posicoes_estoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posicoes_estoqueGroupByOutputType[P]>
            : GetScalarType<T[P], Posicoes_estoqueGroupByOutputType[P]>
        }
      >
    >


  export type posicoes_estoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    status?: boolean
    produto_id?: boolean
    lote_id?: boolean
    quantidade?: boolean
    ultima_movimentacao?: boolean
    observacoes?: boolean
    capacidade_maxima?: boolean
    tipo_posicao?: boolean
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | posicoes_estoque$movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | posicoes_estoque$movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
    _count?: boolean | Posicoes_estoqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posicoes_estoque"]>

  export type posicoes_estoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    status?: boolean
    produto_id?: boolean
    lote_id?: boolean
    quantidade?: boolean
    ultima_movimentacao?: boolean
    observacoes?: boolean
    capacidade_maxima?: boolean
    tipo_posicao?: boolean
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
  }, ExtArgs["result"]["posicoes_estoque"]>

  export type posicoes_estoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    status?: boolean
    produto_id?: boolean
    lote_id?: boolean
    quantidade?: boolean
    ultima_movimentacao?: boolean
    observacoes?: boolean
    capacidade_maxima?: boolean
    tipo_posicao?: boolean
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
  }, ExtArgs["result"]["posicoes_estoque"]>

  export type posicoes_estoqueSelectScalar = {
    id?: boolean
    endereco?: boolean
    status?: boolean
    produto_id?: boolean
    lote_id?: boolean
    quantidade?: boolean
    ultima_movimentacao?: boolean
    observacoes?: boolean
    capacidade_maxima?: boolean
    tipo_posicao?: boolean
  }

  export type posicoes_estoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endereco" | "status" | "produto_id" | "lote_id" | "quantidade" | "ultima_movimentacao" | "observacoes" | "capacidade_maxima" | "tipo_posicao", ExtArgs["result"]["posicoes_estoque"]>
  export type posicoes_estoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: boolean | posicoes_estoque$movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: boolean | posicoes_estoque$movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
    _count?: boolean | Posicoes_estoqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type posicoes_estoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
  }
  export type posicoes_estoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | posicoes_estoque$produtosArgs<ExtArgs>
  }

  export type $posicoes_estoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posicoes_estoque"
    objects: {
      movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque: Prisma.$movimentacoesPayload<ExtArgs>[]
      movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque: Prisma.$movimentacoesPayload<ExtArgs>[]
      produtos: Prisma.$produtosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endereco: string
      status: string | null
      produto_id: number | null
      lote_id: number | null
      quantidade: number | null
      ultima_movimentacao: Date | null
      observacoes: string | null
      capacidade_maxima: number | null
      tipo_posicao: string | null
    }, ExtArgs["result"]["posicoes_estoque"]>
    composites: {}
  }

  type posicoes_estoqueGetPayload<S extends boolean | null | undefined | posicoes_estoqueDefaultArgs> = $Result.GetResult<Prisma.$posicoes_estoquePayload, S>

  type posicoes_estoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posicoes_estoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Posicoes_estoqueCountAggregateInputType | true
    }

  export interface posicoes_estoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posicoes_estoque'], meta: { name: 'posicoes_estoque' } }
    /**
     * Find zero or one Posicoes_estoque that matches the filter.
     * @param {posicoes_estoqueFindUniqueArgs} args - Arguments to find a Posicoes_estoque
     * @example
     * // Get one Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posicoes_estoqueFindUniqueArgs>(args: SelectSubset<T, posicoes_estoqueFindUniqueArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posicoes_estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posicoes_estoqueFindUniqueOrThrowArgs} args - Arguments to find a Posicoes_estoque
     * @example
     * // Get one Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posicoes_estoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, posicoes_estoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posicoes_estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueFindFirstArgs} args - Arguments to find a Posicoes_estoque
     * @example
     * // Get one Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posicoes_estoqueFindFirstArgs>(args?: SelectSubset<T, posicoes_estoqueFindFirstArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posicoes_estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueFindFirstOrThrowArgs} args - Arguments to find a Posicoes_estoque
     * @example
     * // Get one Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posicoes_estoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, posicoes_estoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posicoes_estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posicoes_estoques
     * const posicoes_estoques = await prisma.posicoes_estoque.findMany()
     * 
     * // Get first 10 Posicoes_estoques
     * const posicoes_estoques = await prisma.posicoes_estoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posicoes_estoqueWithIdOnly = await prisma.posicoes_estoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends posicoes_estoqueFindManyArgs>(args?: SelectSubset<T, posicoes_estoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posicoes_estoque.
     * @param {posicoes_estoqueCreateArgs} args - Arguments to create a Posicoes_estoque.
     * @example
     * // Create one Posicoes_estoque
     * const Posicoes_estoque = await prisma.posicoes_estoque.create({
     *   data: {
     *     // ... data to create a Posicoes_estoque
     *   }
     * })
     * 
     */
    create<T extends posicoes_estoqueCreateArgs>(args: SelectSubset<T, posicoes_estoqueCreateArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posicoes_estoques.
     * @param {posicoes_estoqueCreateManyArgs} args - Arguments to create many Posicoes_estoques.
     * @example
     * // Create many Posicoes_estoques
     * const posicoes_estoque = await prisma.posicoes_estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posicoes_estoqueCreateManyArgs>(args?: SelectSubset<T, posicoes_estoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posicoes_estoques and returns the data saved in the database.
     * @param {posicoes_estoqueCreateManyAndReturnArgs} args - Arguments to create many Posicoes_estoques.
     * @example
     * // Create many Posicoes_estoques
     * const posicoes_estoque = await prisma.posicoes_estoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posicoes_estoques and only return the `id`
     * const posicoes_estoqueWithIdOnly = await prisma.posicoes_estoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends posicoes_estoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, posicoes_estoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posicoes_estoque.
     * @param {posicoes_estoqueDeleteArgs} args - Arguments to delete one Posicoes_estoque.
     * @example
     * // Delete one Posicoes_estoque
     * const Posicoes_estoque = await prisma.posicoes_estoque.delete({
     *   where: {
     *     // ... filter to delete one Posicoes_estoque
     *   }
     * })
     * 
     */
    delete<T extends posicoes_estoqueDeleteArgs>(args: SelectSubset<T, posicoes_estoqueDeleteArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posicoes_estoque.
     * @param {posicoes_estoqueUpdateArgs} args - Arguments to update one Posicoes_estoque.
     * @example
     * // Update one Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posicoes_estoqueUpdateArgs>(args: SelectSubset<T, posicoes_estoqueUpdateArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posicoes_estoques.
     * @param {posicoes_estoqueDeleteManyArgs} args - Arguments to filter Posicoes_estoques to delete.
     * @example
     * // Delete a few Posicoes_estoques
     * const { count } = await prisma.posicoes_estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posicoes_estoqueDeleteManyArgs>(args?: SelectSubset<T, posicoes_estoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posicoes_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posicoes_estoques
     * const posicoes_estoque = await prisma.posicoes_estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posicoes_estoqueUpdateManyArgs>(args: SelectSubset<T, posicoes_estoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posicoes_estoques and returns the data updated in the database.
     * @param {posicoes_estoqueUpdateManyAndReturnArgs} args - Arguments to update many Posicoes_estoques.
     * @example
     * // Update many Posicoes_estoques
     * const posicoes_estoque = await prisma.posicoes_estoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posicoes_estoques and only return the `id`
     * const posicoes_estoqueWithIdOnly = await prisma.posicoes_estoque.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends posicoes_estoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, posicoes_estoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posicoes_estoque.
     * @param {posicoes_estoqueUpsertArgs} args - Arguments to update or create a Posicoes_estoque.
     * @example
     * // Update or create a Posicoes_estoque
     * const posicoes_estoque = await prisma.posicoes_estoque.upsert({
     *   create: {
     *     // ... data to create a Posicoes_estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posicoes_estoque we want to update
     *   }
     * })
     */
    upsert<T extends posicoes_estoqueUpsertArgs>(args: SelectSubset<T, posicoes_estoqueUpsertArgs<ExtArgs>>): Prisma__posicoes_estoqueClient<$Result.GetResult<Prisma.$posicoes_estoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posicoes_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueCountArgs} args - Arguments to filter Posicoes_estoques to count.
     * @example
     * // Count the number of Posicoes_estoques
     * const count = await prisma.posicoes_estoque.count({
     *   where: {
     *     // ... the filter for the Posicoes_estoques we want to count
     *   }
     * })
    **/
    count<T extends posicoes_estoqueCountArgs>(
      args?: Subset<T, posicoes_estoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posicoes_estoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posicoes_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posicoes_estoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Posicoes_estoqueAggregateArgs>(args: Subset<T, Posicoes_estoqueAggregateArgs>): Prisma.PrismaPromise<GetPosicoes_estoqueAggregateType<T>>

    /**
     * Group by Posicoes_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posicoes_estoqueGroupByArgs} args - Group by arguments.
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
      T extends posicoes_estoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posicoes_estoqueGroupByArgs['orderBy'] }
        : { orderBy?: posicoes_estoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, posicoes_estoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosicoes_estoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posicoes_estoque model
   */
  readonly fields: posicoes_estoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posicoes_estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posicoes_estoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque<T extends posicoes_estoque$movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, posicoes_estoque$movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque<T extends posicoes_estoque$movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, posicoes_estoque$movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimentacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtos<T extends posicoes_estoque$produtosArgs<ExtArgs> = {}>(args?: Subset<T, posicoes_estoque$produtosArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posicoes_estoque model
   */
  interface posicoes_estoqueFieldRefs {
    readonly id: FieldRef<"posicoes_estoque", 'Int'>
    readonly endereco: FieldRef<"posicoes_estoque", 'String'>
    readonly status: FieldRef<"posicoes_estoque", 'String'>
    readonly produto_id: FieldRef<"posicoes_estoque", 'Int'>
    readonly lote_id: FieldRef<"posicoes_estoque", 'Int'>
    readonly quantidade: FieldRef<"posicoes_estoque", 'Int'>
    readonly ultima_movimentacao: FieldRef<"posicoes_estoque", 'DateTime'>
    readonly observacoes: FieldRef<"posicoes_estoque", 'String'>
    readonly capacidade_maxima: FieldRef<"posicoes_estoque", 'Int'>
    readonly tipo_posicao: FieldRef<"posicoes_estoque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posicoes_estoque findUnique
   */
  export type posicoes_estoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which posicoes_estoque to fetch.
     */
    where: posicoes_estoqueWhereUniqueInput
  }

  /**
   * posicoes_estoque findUniqueOrThrow
   */
  export type posicoes_estoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which posicoes_estoque to fetch.
     */
    where: posicoes_estoqueWhereUniqueInput
  }

  /**
   * posicoes_estoque findFirst
   */
  export type posicoes_estoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which posicoes_estoque to fetch.
     */
    where?: posicoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicoes_estoques to fetch.
     */
    orderBy?: posicoes_estoqueOrderByWithRelationInput | posicoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posicoes_estoques.
     */
    cursor?: posicoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posicoes_estoques.
     */
    distinct?: Posicoes_estoqueScalarFieldEnum | Posicoes_estoqueScalarFieldEnum[]
  }

  /**
   * posicoes_estoque findFirstOrThrow
   */
  export type posicoes_estoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which posicoes_estoque to fetch.
     */
    where?: posicoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicoes_estoques to fetch.
     */
    orderBy?: posicoes_estoqueOrderByWithRelationInput | posicoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posicoes_estoques.
     */
    cursor?: posicoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posicoes_estoques.
     */
    distinct?: Posicoes_estoqueScalarFieldEnum | Posicoes_estoqueScalarFieldEnum[]
  }

  /**
   * posicoes_estoque findMany
   */
  export type posicoes_estoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which posicoes_estoques to fetch.
     */
    where?: posicoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posicoes_estoques to fetch.
     */
    orderBy?: posicoes_estoqueOrderByWithRelationInput | posicoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posicoes_estoques.
     */
    cursor?: posicoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posicoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posicoes_estoques.
     */
    skip?: number
    distinct?: Posicoes_estoqueScalarFieldEnum | Posicoes_estoqueScalarFieldEnum[]
  }

  /**
   * posicoes_estoque create
   */
  export type posicoes_estoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a posicoes_estoque.
     */
    data: XOR<posicoes_estoqueCreateInput, posicoes_estoqueUncheckedCreateInput>
  }

  /**
   * posicoes_estoque createMany
   */
  export type posicoes_estoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posicoes_estoques.
     */
    data: posicoes_estoqueCreateManyInput | posicoes_estoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posicoes_estoque createManyAndReturn
   */
  export type posicoes_estoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * The data used to create many posicoes_estoques.
     */
    data: posicoes_estoqueCreateManyInput | posicoes_estoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posicoes_estoque update
   */
  export type posicoes_estoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a posicoes_estoque.
     */
    data: XOR<posicoes_estoqueUpdateInput, posicoes_estoqueUncheckedUpdateInput>
    /**
     * Choose, which posicoes_estoque to update.
     */
    where: posicoes_estoqueWhereUniqueInput
  }

  /**
   * posicoes_estoque updateMany
   */
  export type posicoes_estoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posicoes_estoques.
     */
    data: XOR<posicoes_estoqueUpdateManyMutationInput, posicoes_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which posicoes_estoques to update
     */
    where?: posicoes_estoqueWhereInput
    /**
     * Limit how many posicoes_estoques to update.
     */
    limit?: number
  }

  /**
   * posicoes_estoque updateManyAndReturn
   */
  export type posicoes_estoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * The data used to update posicoes_estoques.
     */
    data: XOR<posicoes_estoqueUpdateManyMutationInput, posicoes_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which posicoes_estoques to update
     */
    where?: posicoes_estoqueWhereInput
    /**
     * Limit how many posicoes_estoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posicoes_estoque upsert
   */
  export type posicoes_estoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the posicoes_estoque to update in case it exists.
     */
    where: posicoes_estoqueWhereUniqueInput
    /**
     * In case the posicoes_estoque found by the `where` argument doesn't exist, create a new posicoes_estoque with this data.
     */
    create: XOR<posicoes_estoqueCreateInput, posicoes_estoqueUncheckedCreateInput>
    /**
     * In case the posicoes_estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posicoes_estoqueUpdateInput, posicoes_estoqueUncheckedUpdateInput>
  }

  /**
   * posicoes_estoque delete
   */
  export type posicoes_estoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter which posicoes_estoque to delete.
     */
    where: posicoes_estoqueWhereUniqueInput
  }

  /**
   * posicoes_estoque deleteMany
   */
  export type posicoes_estoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posicoes_estoques to delete
     */
    where?: posicoes_estoqueWhereInput
    /**
     * Limit how many posicoes_estoques to delete.
     */
    limit?: number
  }

  /**
   * posicoes_estoque.movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque
   */
  export type posicoes_estoque$movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    where?: movimentacoesWhereInput
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    cursor?: movimentacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * posicoes_estoque.movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque
   */
  export type posicoes_estoque$movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimentacoes
     */
    select?: movimentacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimentacoes
     */
    omit?: movimentacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimentacoesInclude<ExtArgs> | null
    where?: movimentacoesWhereInput
    orderBy?: movimentacoesOrderByWithRelationInput | movimentacoesOrderByWithRelationInput[]
    cursor?: movimentacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacoesScalarFieldEnum | MovimentacoesScalarFieldEnum[]
  }

  /**
   * posicoes_estoque.produtos
   */
  export type posicoes_estoque$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    where?: produtosWhereInput
  }

  /**
   * posicoes_estoque without action
   */
  export type posicoes_estoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posicoes_estoque
     */
    select?: posicoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posicoes_estoque
     */
    omit?: posicoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posicoes_estoqueInclude<ExtArgs> | null
  }


  /**
   * Model subcategorias
   */

  export type AggregateSubcategorias = {
    _count: SubcategoriasCountAggregateOutputType | null
    _avg: SubcategoriasAvgAggregateOutputType | null
    _sum: SubcategoriasSumAggregateOutputType | null
    _min: SubcategoriasMinAggregateOutputType | null
    _max: SubcategoriasMaxAggregateOutputType | null
  }

  export type SubcategoriasAvgAggregateOutputType = {
    id: number | null
    categoria_id: number | null
  }

  export type SubcategoriasSumAggregateOutputType = {
    id: number | null
    categoria_id: number | null
  }

  export type SubcategoriasMinAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    nome: string | null
    descricao: string | null
    codigo: string | null
  }

  export type SubcategoriasMaxAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    nome: string | null
    descricao: string | null
    codigo: string | null
  }

  export type SubcategoriasCountAggregateOutputType = {
    id: number
    categoria_id: number
    nome: number
    descricao: number
    codigo: number
    _all: number
  }


  export type SubcategoriasAvgAggregateInputType = {
    id?: true
    categoria_id?: true
  }

  export type SubcategoriasSumAggregateInputType = {
    id?: true
    categoria_id?: true
  }

  export type SubcategoriasMinAggregateInputType = {
    id?: true
    categoria_id?: true
    nome?: true
    descricao?: true
    codigo?: true
  }

  export type SubcategoriasMaxAggregateInputType = {
    id?: true
    categoria_id?: true
    nome?: true
    descricao?: true
    codigo?: true
  }

  export type SubcategoriasCountAggregateInputType = {
    id?: true
    categoria_id?: true
    nome?: true
    descricao?: true
    codigo?: true
    _all?: true
  }

  export type SubcategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategorias to aggregate.
     */
    where?: subcategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriasOrderByWithRelationInput | subcategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subcategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subcategorias
    **/
    _count?: true | SubcategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoriasMaxAggregateInputType
  }

  export type GetSubcategoriasAggregateType<T extends SubcategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategorias[P]>
      : GetScalarType<T[P], AggregateSubcategorias[P]>
  }




  export type subcategoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriasWhereInput
    orderBy?: subcategoriasOrderByWithAggregationInput | subcategoriasOrderByWithAggregationInput[]
    by: SubcategoriasScalarFieldEnum[] | SubcategoriasScalarFieldEnum
    having?: subcategoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoriasCountAggregateInputType | true
    _avg?: SubcategoriasAvgAggregateInputType
    _sum?: SubcategoriasSumAggregateInputType
    _min?: SubcategoriasMinAggregateInputType
    _max?: SubcategoriasMaxAggregateInputType
  }

  export type SubcategoriasGroupByOutputType = {
    id: number
    categoria_id: number
    nome: string
    descricao: string | null
    codigo: string | null
    _count: SubcategoriasCountAggregateOutputType | null
    _avg: SubcategoriasAvgAggregateOutputType | null
    _sum: SubcategoriasSumAggregateOutputType | null
    _min: SubcategoriasMinAggregateOutputType | null
    _max: SubcategoriasMaxAggregateOutputType | null
  }

  type GetSubcategoriasGroupByPayload<T extends subcategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoriasGroupByOutputType[P]>
        }
      >
    >


  export type subcategoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria_id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
    produtos?: boolean | subcategorias$produtosArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    _count?: boolean | SubcategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategorias"]>

  export type subcategoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria_id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategorias"]>

  export type subcategoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria_id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategorias"]>

  export type subcategoriasSelectScalar = {
    id?: boolean
    categoria_id?: boolean
    nome?: boolean
    descricao?: boolean
    codigo?: boolean
  }

  export type subcategoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoria_id" | "nome" | "descricao" | "codigo", ExtArgs["result"]["subcategorias"]>
  export type subcategoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | subcategorias$produtosArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    _count?: boolean | SubcategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subcategoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }
  export type subcategoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
  }

  export type $subcategoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subcategorias"
    objects: {
      produtos: Prisma.$produtosPayload<ExtArgs>[]
      categorias: Prisma.$categoriasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoria_id: number
      nome: string
      descricao: string | null
      codigo: string | null
    }, ExtArgs["result"]["subcategorias"]>
    composites: {}
  }

  type subcategoriasGetPayload<S extends boolean | null | undefined | subcategoriasDefaultArgs> = $Result.GetResult<Prisma.$subcategoriasPayload, S>

  type subcategoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subcategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoriasCountAggregateInputType | true
    }

  export interface subcategoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcategorias'], meta: { name: 'subcategorias' } }
    /**
     * Find zero or one Subcategorias that matches the filter.
     * @param {subcategoriasFindUniqueArgs} args - Arguments to find a Subcategorias
     * @example
     * // Get one Subcategorias
     * const subcategorias = await prisma.subcategorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subcategoriasFindUniqueArgs>(args: SelectSubset<T, subcategoriasFindUniqueArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subcategoriasFindUniqueOrThrowArgs} args - Arguments to find a Subcategorias
     * @example
     * // Get one Subcategorias
     * const subcategorias = await prisma.subcategorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subcategoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, subcategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasFindFirstArgs} args - Arguments to find a Subcategorias
     * @example
     * // Get one Subcategorias
     * const subcategorias = await prisma.subcategorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subcategoriasFindFirstArgs>(args?: SelectSubset<T, subcategoriasFindFirstArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasFindFirstOrThrowArgs} args - Arguments to find a Subcategorias
     * @example
     * // Get one Subcategorias
     * const subcategorias = await prisma.subcategorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subcategoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, subcategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategorias
     * const subcategorias = await prisma.subcategorias.findMany()
     * 
     * // Get first 10 Subcategorias
     * const subcategorias = await prisma.subcategorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoriasWithIdOnly = await prisma.subcategorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subcategoriasFindManyArgs>(args?: SelectSubset<T, subcategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategorias.
     * @param {subcategoriasCreateArgs} args - Arguments to create a Subcategorias.
     * @example
     * // Create one Subcategorias
     * const Subcategorias = await prisma.subcategorias.create({
     *   data: {
     *     // ... data to create a Subcategorias
     *   }
     * })
     * 
     */
    create<T extends subcategoriasCreateArgs>(args: SelectSubset<T, subcategoriasCreateArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategorias.
     * @param {subcategoriasCreateManyArgs} args - Arguments to create many Subcategorias.
     * @example
     * // Create many Subcategorias
     * const subcategorias = await prisma.subcategorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subcategoriasCreateManyArgs>(args?: SelectSubset<T, subcategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategorias and returns the data saved in the database.
     * @param {subcategoriasCreateManyAndReturnArgs} args - Arguments to create many Subcategorias.
     * @example
     * // Create many Subcategorias
     * const subcategorias = await prisma.subcategorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategorias and only return the `id`
     * const subcategoriasWithIdOnly = await prisma.subcategorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subcategoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, subcategoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategorias.
     * @param {subcategoriasDeleteArgs} args - Arguments to delete one Subcategorias.
     * @example
     * // Delete one Subcategorias
     * const Subcategorias = await prisma.subcategorias.delete({
     *   where: {
     *     // ... filter to delete one Subcategorias
     *   }
     * })
     * 
     */
    delete<T extends subcategoriasDeleteArgs>(args: SelectSubset<T, subcategoriasDeleteArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategorias.
     * @param {subcategoriasUpdateArgs} args - Arguments to update one Subcategorias.
     * @example
     * // Update one Subcategorias
     * const subcategorias = await prisma.subcategorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subcategoriasUpdateArgs>(args: SelectSubset<T, subcategoriasUpdateArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategorias.
     * @param {subcategoriasDeleteManyArgs} args - Arguments to filter Subcategorias to delete.
     * @example
     * // Delete a few Subcategorias
     * const { count } = await prisma.subcategorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subcategoriasDeleteManyArgs>(args?: SelectSubset<T, subcategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategorias
     * const subcategorias = await prisma.subcategorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subcategoriasUpdateManyArgs>(args: SelectSubset<T, subcategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategorias and returns the data updated in the database.
     * @param {subcategoriasUpdateManyAndReturnArgs} args - Arguments to update many Subcategorias.
     * @example
     * // Update many Subcategorias
     * const subcategorias = await prisma.subcategorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategorias and only return the `id`
     * const subcategoriasWithIdOnly = await prisma.subcategorias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subcategoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, subcategoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategorias.
     * @param {subcategoriasUpsertArgs} args - Arguments to update or create a Subcategorias.
     * @example
     * // Update or create a Subcategorias
     * const subcategorias = await prisma.subcategorias.upsert({
     *   create: {
     *     // ... data to create a Subcategorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategorias we want to update
     *   }
     * })
     */
    upsert<T extends subcategoriasUpsertArgs>(args: SelectSubset<T, subcategoriasUpsertArgs<ExtArgs>>): Prisma__subcategoriasClient<$Result.GetResult<Prisma.$subcategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasCountArgs} args - Arguments to filter Subcategorias to count.
     * @example
     * // Count the number of Subcategorias
     * const count = await prisma.subcategorias.count({
     *   where: {
     *     // ... the filter for the Subcategorias we want to count
     *   }
     * })
    **/
    count<T extends subcategoriasCountArgs>(
      args?: Subset<T, subcategoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoriasAggregateArgs>(args: Subset<T, SubcategoriasAggregateArgs>): Prisma.PrismaPromise<GetSubcategoriasAggregateType<T>>

    /**
     * Group by Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriasGroupByArgs} args - Group by arguments.
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
      T extends subcategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subcategoriasGroupByArgs['orderBy'] }
        : { orderBy?: subcategoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subcategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcategorias model
   */
  readonly fields: subcategoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcategorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subcategoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends subcategorias$produtosArgs<ExtArgs> = {}>(args?: Subset<T, subcategorias$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends categoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriasDefaultArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subcategorias model
   */
  interface subcategoriasFieldRefs {
    readonly id: FieldRef<"subcategorias", 'Int'>
    readonly categoria_id: FieldRef<"subcategorias", 'Int'>
    readonly nome: FieldRef<"subcategorias", 'String'>
    readonly descricao: FieldRef<"subcategorias", 'String'>
    readonly codigo: FieldRef<"subcategorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * subcategorias findUnique
   */
  export type subcategoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where: subcategoriasWhereUniqueInput
  }

  /**
   * subcategorias findUniqueOrThrow
   */
  export type subcategoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where: subcategoriasWhereUniqueInput
  }

  /**
   * subcategorias findFirst
   */
  export type subcategoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where?: subcategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriasOrderByWithRelationInput | subcategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategorias.
     */
    cursor?: subcategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategorias.
     */
    distinct?: SubcategoriasScalarFieldEnum | SubcategoriasScalarFieldEnum[]
  }

  /**
   * subcategorias findFirstOrThrow
   */
  export type subcategoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where?: subcategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriasOrderByWithRelationInput | subcategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategorias.
     */
    cursor?: subcategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategorias.
     */
    distinct?: SubcategoriasScalarFieldEnum | SubcategoriasScalarFieldEnum[]
  }

  /**
   * subcategorias findMany
   */
  export type subcategoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where?: subcategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriasOrderByWithRelationInput | subcategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subcategorias.
     */
    cursor?: subcategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    distinct?: SubcategoriasScalarFieldEnum | SubcategoriasScalarFieldEnum[]
  }

  /**
   * subcategorias create
   */
  export type subcategoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a subcategorias.
     */
    data: XOR<subcategoriasCreateInput, subcategoriasUncheckedCreateInput>
  }

  /**
   * subcategorias createMany
   */
  export type subcategoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subcategorias.
     */
    data: subcategoriasCreateManyInput | subcategoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subcategorias createManyAndReturn
   */
  export type subcategoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * The data used to create many subcategorias.
     */
    data: subcategoriasCreateManyInput | subcategoriasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategorias update
   */
  export type subcategoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a subcategorias.
     */
    data: XOR<subcategoriasUpdateInput, subcategoriasUncheckedUpdateInput>
    /**
     * Choose, which subcategorias to update.
     */
    where: subcategoriasWhereUniqueInput
  }

  /**
   * subcategorias updateMany
   */
  export type subcategoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subcategorias.
     */
    data: XOR<subcategoriasUpdateManyMutationInput, subcategoriasUncheckedUpdateManyInput>
    /**
     * Filter which subcategorias to update
     */
    where?: subcategoriasWhereInput
    /**
     * Limit how many subcategorias to update.
     */
    limit?: number
  }

  /**
   * subcategorias updateManyAndReturn
   */
  export type subcategoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * The data used to update subcategorias.
     */
    data: XOR<subcategoriasUpdateManyMutationInput, subcategoriasUncheckedUpdateManyInput>
    /**
     * Filter which subcategorias to update
     */
    where?: subcategoriasWhereInput
    /**
     * Limit how many subcategorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategorias upsert
   */
  export type subcategoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the subcategorias to update in case it exists.
     */
    where: subcategoriasWhereUniqueInput
    /**
     * In case the subcategorias found by the `where` argument doesn't exist, create a new subcategorias with this data.
     */
    create: XOR<subcategoriasCreateInput, subcategoriasUncheckedCreateInput>
    /**
     * In case the subcategorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subcategoriasUpdateInput, subcategoriasUncheckedUpdateInput>
  }

  /**
   * subcategorias delete
   */
  export type subcategoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
    /**
     * Filter which subcategorias to delete.
     */
    where: subcategoriasWhereUniqueInput
  }

  /**
   * subcategorias deleteMany
   */
  export type subcategoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategorias to delete
     */
    where?: subcategoriasWhereInput
    /**
     * Limit how many subcategorias to delete.
     */
    limit?: number
  }

  /**
   * subcategorias.produtos
   */
  export type subcategorias$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    cursor?: produtosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * subcategorias without action
   */
  export type subcategoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategorias
     */
    select?: subcategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategorias
     */
    omit?: subcategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriasInclude<ExtArgs> | null
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


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    codigo: 'codigo'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sku: 'sku',
    peso_unitario: 'peso_unitario',
    volume: 'volume',
    tipo_embalagem: 'tipo_embalagem',
    descricao: 'descricao',
    codigo_barras: 'codigo_barras',
    preco_custo: 'preco_custo',
    preco_venda: 'preco_venda',
    estoque_minimo: 'estoque_minimo',
    estoque_maximo: 'estoque_maximo',
    ponto_reposicao: 'ponto_reposicao',
    lead_time: 'lead_time',
    status: 'status',
    unidade_medida: 'unidade_medida',
    categoria_id: 'categoria_id',
    subcategoria_id: 'subcategoria_id',
    fornecedor_principal_id: 'fornecedor_principal_id',
    data_cadastro: 'data_cadastro',
    imagem_url: 'imagem_url'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const Modelos_motoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    marca: 'marca',
    ano_inicio: 'ano_inicio',
    ano_fim: 'ano_fim',
    cilindrada: 'cilindrada',
    tipo: 'tipo',
    descricao: 'descricao',
    imagem_url: 'imagem_url',
    status: 'status',
    data_cadastro: 'data_cadastro'
  };

  export type Modelos_motoScalarFieldEnum = (typeof Modelos_motoScalarFieldEnum)[keyof typeof Modelos_motoScalarFieldEnum]


  export const MovimentacoesScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    lote_id: 'lote_id',
    posicao_origem_id: 'posicao_origem_id',
    posicao_destino_id: 'posicao_destino_id',
    tipo: 'tipo',
    quantidade: 'quantidade',
    data_hora: 'data_hora',
    responsavel_id: 'responsavel_id',
    documento_id: 'documento_id',
    motivo: 'motivo',
    observacoes: 'observacoes',
    custo_unitario: 'custo_unitario'
  };

  export type MovimentacoesScalarFieldEnum = (typeof MovimentacoesScalarFieldEnum)[keyof typeof MovimentacoesScalarFieldEnum]


  export const Posicoes_estoqueScalarFieldEnum: {
    id: 'id',
    endereco: 'endereco',
    status: 'status',
    produto_id: 'produto_id',
    lote_id: 'lote_id',
    quantidade: 'quantidade',
    ultima_movimentacao: 'ultima_movimentacao',
    observacoes: 'observacoes',
    capacidade_maxima: 'capacidade_maxima',
    tipo_posicao: 'tipo_posicao'
  };

  export type Posicoes_estoqueScalarFieldEnum = (typeof Posicoes_estoqueScalarFieldEnum)[keyof typeof Posicoes_estoqueScalarFieldEnum]


  export const SubcategoriasScalarFieldEnum: {
    id: 'id',
    categoria_id: 'categoria_id',
    nome: 'nome',
    descricao: 'descricao',
    codigo: 'codigo'
  };

  export type SubcategoriasScalarFieldEnum = (typeof SubcategoriasScalarFieldEnum)[keyof typeof SubcategoriasScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: IntFilter<"categorias"> | number
    nome?: StringFilter<"categorias"> | string
    descricao?: StringNullableFilter<"categorias"> | string | null
    codigo?: StringNullableFilter<"categorias"> | string | null
    produtos?: ProdutosListRelationFilter
    subcategorias?: SubcategoriasListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    produtos?: produtosOrderByRelationAggregateInput
    subcategorias?: subcategoriasOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    nome?: StringFilter<"categorias"> | string
    descricao?: StringNullableFilter<"categorias"> | string | null
    produtos?: ProdutosListRelationFilter
    subcategorias?: SubcategoriasListRelationFilter
  }, "id" | "codigo">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorias"> | number
    nome?: StringWithAggregatesFilter<"categorias"> | string
    descricao?: StringNullableWithAggregatesFilter<"categorias"> | string | null
    codigo?: StringNullableWithAggregatesFilter<"categorias"> | string | null
  }

  export type produtosWhereInput = {
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    id?: IntFilter<"produtos"> | number
    nome?: StringFilter<"produtos"> | string
    sku?: StringFilter<"produtos"> | string
    peso_unitario?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: StringNullableFilter<"produtos"> | string | null
    descricao?: StringNullableFilter<"produtos"> | string | null
    codigo_barras?: StringNullableFilter<"produtos"> | string | null
    preco_custo?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    preco_venda?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: IntNullableFilter<"produtos"> | number | null
    estoque_maximo?: IntNullableFilter<"produtos"> | number | null
    ponto_reposicao?: IntNullableFilter<"produtos"> | number | null
    lead_time?: IntNullableFilter<"produtos"> | number | null
    status?: StringNullableFilter<"produtos"> | string | null
    unidade_medida?: StringNullableFilter<"produtos"> | string | null
    categoria_id?: IntNullableFilter<"produtos"> | number | null
    subcategoria_id?: IntNullableFilter<"produtos"> | number | null
    fornecedor_principal_id?: IntNullableFilter<"produtos"> | number | null
    data_cadastro?: DateTimeNullableFilter<"produtos"> | Date | string | null
    imagem_url?: StringNullableFilter<"produtos"> | string | null
    movimentacoes?: MovimentacoesListRelationFilter
    posicoes_estoque?: Posicoes_estoqueListRelationFilter
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    subcategorias?: XOR<SubcategoriasNullableScalarRelationFilter, subcategoriasWhereInput> | null
  }

  export type produtosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    peso_unitario?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    tipo_embalagem?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo_barras?: SortOrderInput | SortOrder
    preco_custo?: SortOrderInput | SortOrder
    preco_venda?: SortOrderInput | SortOrder
    estoque_minimo?: SortOrderInput | SortOrder
    estoque_maximo?: SortOrderInput | SortOrder
    ponto_reposicao?: SortOrderInput | SortOrder
    lead_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    subcategoria_id?: SortOrderInput | SortOrder
    fornecedor_principal_id?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    imagem_url?: SortOrderInput | SortOrder
    movimentacoes?: movimentacoesOrderByRelationAggregateInput
    posicoes_estoque?: posicoes_estoqueOrderByRelationAggregateInput
    categorias?: categoriasOrderByWithRelationInput
    subcategorias?: subcategoriasOrderByWithRelationInput
  }

  export type produtosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    nome?: StringFilter<"produtos"> | string
    peso_unitario?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: StringNullableFilter<"produtos"> | string | null
    descricao?: StringNullableFilter<"produtos"> | string | null
    codigo_barras?: StringNullableFilter<"produtos"> | string | null
    preco_custo?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    preco_venda?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: IntNullableFilter<"produtos"> | number | null
    estoque_maximo?: IntNullableFilter<"produtos"> | number | null
    ponto_reposicao?: IntNullableFilter<"produtos"> | number | null
    lead_time?: IntNullableFilter<"produtos"> | number | null
    status?: StringNullableFilter<"produtos"> | string | null
    unidade_medida?: StringNullableFilter<"produtos"> | string | null
    categoria_id?: IntNullableFilter<"produtos"> | number | null
    subcategoria_id?: IntNullableFilter<"produtos"> | number | null
    fornecedor_principal_id?: IntNullableFilter<"produtos"> | number | null
    data_cadastro?: DateTimeNullableFilter<"produtos"> | Date | string | null
    imagem_url?: StringNullableFilter<"produtos"> | string | null
    movimentacoes?: MovimentacoesListRelationFilter
    posicoes_estoque?: Posicoes_estoqueListRelationFilter
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    subcategorias?: XOR<SubcategoriasNullableScalarRelationFilter, subcategoriasWhereInput> | null
  }, "id" | "sku">

  export type produtosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    peso_unitario?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    tipo_embalagem?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo_barras?: SortOrderInput | SortOrder
    preco_custo?: SortOrderInput | SortOrder
    preco_venda?: SortOrderInput | SortOrder
    estoque_minimo?: SortOrderInput | SortOrder
    estoque_maximo?: SortOrderInput | SortOrder
    ponto_reposicao?: SortOrderInput | SortOrder
    lead_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    subcategoria_id?: SortOrderInput | SortOrder
    fornecedor_principal_id?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    imagem_url?: SortOrderInput | SortOrder
    _count?: produtosCountOrderByAggregateInput
    _avg?: produtosAvgOrderByAggregateInput
    _max?: produtosMaxOrderByAggregateInput
    _min?: produtosMinOrderByAggregateInput
    _sum?: produtosSumOrderByAggregateInput
  }

  export type produtosScalarWhereWithAggregatesInput = {
    AND?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    OR?: produtosScalarWhereWithAggregatesInput[]
    NOT?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produtos"> | number
    nome?: StringWithAggregatesFilter<"produtos"> | string
    sku?: StringWithAggregatesFilter<"produtos"> | string
    peso_unitario?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    codigo_barras?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    preco_custo?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    preco_venda?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    estoque_maximo?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    ponto_reposicao?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    lead_time?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    status?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    unidade_medida?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    categoria_id?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    subcategoria_id?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    fornecedor_principal_id?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"produtos"> | Date | string | null
    imagem_url?: StringNullableWithAggregatesFilter<"produtos"> | string | null
  }

  export type modelos_motoWhereInput = {
    AND?: modelos_motoWhereInput | modelos_motoWhereInput[]
    OR?: modelos_motoWhereInput[]
    NOT?: modelos_motoWhereInput | modelos_motoWhereInput[]
    id?: IntFilter<"modelos_moto"> | number
    nome?: StringFilter<"modelos_moto"> | string
    marca?: StringNullableFilter<"modelos_moto"> | string | null
    ano_inicio?: IntNullableFilter<"modelos_moto"> | number | null
    ano_fim?: IntNullableFilter<"modelos_moto"> | number | null
    cilindrada?: IntNullableFilter<"modelos_moto"> | number | null
    tipo?: StringNullableFilter<"modelos_moto"> | string | null
    descricao?: StringNullableFilter<"modelos_moto"> | string | null
    imagem_url?: StringNullableFilter<"modelos_moto"> | string | null
    status?: StringNullableFilter<"modelos_moto"> | string | null
    data_cadastro?: DateTimeNullableFilter<"modelos_moto"> | Date | string | null
  }

  export type modelos_motoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrderInput | SortOrder
    ano_inicio?: SortOrderInput | SortOrder
    ano_fim?: SortOrderInput | SortOrder
    cilindrada?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
  }

  export type modelos_motoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: modelos_motoWhereInput | modelos_motoWhereInput[]
    OR?: modelos_motoWhereInput[]
    NOT?: modelos_motoWhereInput | modelos_motoWhereInput[]
    nome?: StringFilter<"modelos_moto"> | string
    marca?: StringNullableFilter<"modelos_moto"> | string | null
    ano_inicio?: IntNullableFilter<"modelos_moto"> | number | null
    ano_fim?: IntNullableFilter<"modelos_moto"> | number | null
    cilindrada?: IntNullableFilter<"modelos_moto"> | number | null
    tipo?: StringNullableFilter<"modelos_moto"> | string | null
    descricao?: StringNullableFilter<"modelos_moto"> | string | null
    imagem_url?: StringNullableFilter<"modelos_moto"> | string | null
    status?: StringNullableFilter<"modelos_moto"> | string | null
    data_cadastro?: DateTimeNullableFilter<"modelos_moto"> | Date | string | null
  }, "id">

  export type modelos_motoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrderInput | SortOrder
    ano_inicio?: SortOrderInput | SortOrder
    ano_fim?: SortOrderInput | SortOrder
    cilindrada?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: modelos_motoCountOrderByAggregateInput
    _avg?: modelos_motoAvgOrderByAggregateInput
    _max?: modelos_motoMaxOrderByAggregateInput
    _min?: modelos_motoMinOrderByAggregateInput
    _sum?: modelos_motoSumOrderByAggregateInput
  }

  export type modelos_motoScalarWhereWithAggregatesInput = {
    AND?: modelos_motoScalarWhereWithAggregatesInput | modelos_motoScalarWhereWithAggregatesInput[]
    OR?: modelos_motoScalarWhereWithAggregatesInput[]
    NOT?: modelos_motoScalarWhereWithAggregatesInput | modelos_motoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"modelos_moto"> | number
    nome?: StringWithAggregatesFilter<"modelos_moto"> | string
    marca?: StringNullableWithAggregatesFilter<"modelos_moto"> | string | null
    ano_inicio?: IntNullableWithAggregatesFilter<"modelos_moto"> | number | null
    ano_fim?: IntNullableWithAggregatesFilter<"modelos_moto"> | number | null
    cilindrada?: IntNullableWithAggregatesFilter<"modelos_moto"> | number | null
    tipo?: StringNullableWithAggregatesFilter<"modelos_moto"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"modelos_moto"> | string | null
    imagem_url?: StringNullableWithAggregatesFilter<"modelos_moto"> | string | null
    status?: StringNullableWithAggregatesFilter<"modelos_moto"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"modelos_moto"> | Date | string | null
  }

  export type movimentacoesWhereInput = {
    AND?: movimentacoesWhereInput | movimentacoesWhereInput[]
    OR?: movimentacoesWhereInput[]
    NOT?: movimentacoesWhereInput | movimentacoesWhereInput[]
    id?: IntFilter<"movimentacoes"> | number
    produto_id?: IntFilter<"movimentacoes"> | number
    lote_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_origem_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_destino_id?: IntNullableFilter<"movimentacoes"> | number | null
    tipo?: StringNullableFilter<"movimentacoes"> | string | null
    quantidade?: IntFilter<"movimentacoes"> | number
    data_hora?: DateTimeFilter<"movimentacoes"> | Date | string
    responsavel_id?: IntNullableFilter<"movimentacoes"> | number | null
    documento_id?: IntNullableFilter<"movimentacoes"> | number | null
    motivo?: StringNullableFilter<"movimentacoes"> | string | null
    observacoes?: StringNullableFilter<"movimentacoes"> | string | null
    custo_unitario?: DecimalNullableFilter<"movimentacoes"> | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: XOR<Posicoes_estoqueNullableScalarRelationFilter, posicoes_estoqueWhereInput> | null
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: XOR<Posicoes_estoqueNullableScalarRelationFilter, posicoes_estoqueWhereInput> | null
    produtos?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }

  export type movimentacoesOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrderInput | SortOrder
    posicao_origem_id?: SortOrderInput | SortOrder
    posicao_destino_id?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    data_hora?: SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    documento_id?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    custo_unitario?: SortOrderInput | SortOrder
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueOrderByWithRelationInput
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueOrderByWithRelationInput
    produtos?: produtosOrderByWithRelationInput
  }

  export type movimentacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movimentacoesWhereInput | movimentacoesWhereInput[]
    OR?: movimentacoesWhereInput[]
    NOT?: movimentacoesWhereInput | movimentacoesWhereInput[]
    produto_id?: IntFilter<"movimentacoes"> | number
    lote_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_origem_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_destino_id?: IntNullableFilter<"movimentacoes"> | number | null
    tipo?: StringNullableFilter<"movimentacoes"> | string | null
    quantidade?: IntFilter<"movimentacoes"> | number
    data_hora?: DateTimeFilter<"movimentacoes"> | Date | string
    responsavel_id?: IntNullableFilter<"movimentacoes"> | number | null
    documento_id?: IntNullableFilter<"movimentacoes"> | number | null
    motivo?: StringNullableFilter<"movimentacoes"> | string | null
    observacoes?: StringNullableFilter<"movimentacoes"> | string | null
    custo_unitario?: DecimalNullableFilter<"movimentacoes"> | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: XOR<Posicoes_estoqueNullableScalarRelationFilter, posicoes_estoqueWhereInput> | null
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: XOR<Posicoes_estoqueNullableScalarRelationFilter, posicoes_estoqueWhereInput> | null
    produtos?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }, "id">

  export type movimentacoesOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrderInput | SortOrder
    posicao_origem_id?: SortOrderInput | SortOrder
    posicao_destino_id?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    data_hora?: SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    documento_id?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    custo_unitario?: SortOrderInput | SortOrder
    _count?: movimentacoesCountOrderByAggregateInput
    _avg?: movimentacoesAvgOrderByAggregateInput
    _max?: movimentacoesMaxOrderByAggregateInput
    _min?: movimentacoesMinOrderByAggregateInput
    _sum?: movimentacoesSumOrderByAggregateInput
  }

  export type movimentacoesScalarWhereWithAggregatesInput = {
    AND?: movimentacoesScalarWhereWithAggregatesInput | movimentacoesScalarWhereWithAggregatesInput[]
    OR?: movimentacoesScalarWhereWithAggregatesInput[]
    NOT?: movimentacoesScalarWhereWithAggregatesInput | movimentacoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movimentacoes"> | number
    produto_id?: IntWithAggregatesFilter<"movimentacoes"> | number
    lote_id?: IntNullableWithAggregatesFilter<"movimentacoes"> | number | null
    posicao_origem_id?: IntNullableWithAggregatesFilter<"movimentacoes"> | number | null
    posicao_destino_id?: IntNullableWithAggregatesFilter<"movimentacoes"> | number | null
    tipo?: StringNullableWithAggregatesFilter<"movimentacoes"> | string | null
    quantidade?: IntWithAggregatesFilter<"movimentacoes"> | number
    data_hora?: DateTimeWithAggregatesFilter<"movimentacoes"> | Date | string
    responsavel_id?: IntNullableWithAggregatesFilter<"movimentacoes"> | number | null
    documento_id?: IntNullableWithAggregatesFilter<"movimentacoes"> | number | null
    motivo?: StringNullableWithAggregatesFilter<"movimentacoes"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"movimentacoes"> | string | null
    custo_unitario?: DecimalNullableWithAggregatesFilter<"movimentacoes"> | Decimal | DecimalJsLike | number | string | null
  }

  export type posicoes_estoqueWhereInput = {
    AND?: posicoes_estoqueWhereInput | posicoes_estoqueWhereInput[]
    OR?: posicoes_estoqueWhereInput[]
    NOT?: posicoes_estoqueWhereInput | posicoes_estoqueWhereInput[]
    id?: IntFilter<"posicoes_estoque"> | number
    endereco?: StringFilter<"posicoes_estoque"> | string
    status?: StringNullableFilter<"posicoes_estoque"> | string | null
    produto_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    lote_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    quantidade?: IntNullableFilter<"posicoes_estoque"> | number | null
    ultima_movimentacao?: DateTimeNullableFilter<"posicoes_estoque"> | Date | string | null
    observacoes?: StringNullableFilter<"posicoes_estoque"> | string | null
    capacidade_maxima?: IntNullableFilter<"posicoes_estoque"> | number | null
    tipo_posicao?: StringNullableFilter<"posicoes_estoque"> | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: MovimentacoesListRelationFilter
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: MovimentacoesListRelationFilter
    produtos?: XOR<ProdutosNullableScalarRelationFilter, produtosWhereInput> | null
  }

  export type posicoes_estoqueOrderByWithRelationInput = {
    id?: SortOrder
    endereco?: SortOrder
    status?: SortOrderInput | SortOrder
    produto_id?: SortOrderInput | SortOrder
    lote_id?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    ultima_movimentacao?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    capacidade_maxima?: SortOrderInput | SortOrder
    tipo_posicao?: SortOrderInput | SortOrder
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesOrderByRelationAggregateInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesOrderByRelationAggregateInput
    produtos?: produtosOrderByWithRelationInput
  }

  export type posicoes_estoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: posicoes_estoqueWhereInput | posicoes_estoqueWhereInput[]
    OR?: posicoes_estoqueWhereInput[]
    NOT?: posicoes_estoqueWhereInput | posicoes_estoqueWhereInput[]
    endereco?: StringFilter<"posicoes_estoque"> | string
    status?: StringNullableFilter<"posicoes_estoque"> | string | null
    produto_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    lote_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    quantidade?: IntNullableFilter<"posicoes_estoque"> | number | null
    ultima_movimentacao?: DateTimeNullableFilter<"posicoes_estoque"> | Date | string | null
    observacoes?: StringNullableFilter<"posicoes_estoque"> | string | null
    capacidade_maxima?: IntNullableFilter<"posicoes_estoque"> | number | null
    tipo_posicao?: StringNullableFilter<"posicoes_estoque"> | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: MovimentacoesListRelationFilter
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: MovimentacoesListRelationFilter
    produtos?: XOR<ProdutosNullableScalarRelationFilter, produtosWhereInput> | null
  }, "id">

  export type posicoes_estoqueOrderByWithAggregationInput = {
    id?: SortOrder
    endereco?: SortOrder
    status?: SortOrderInput | SortOrder
    produto_id?: SortOrderInput | SortOrder
    lote_id?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    ultima_movimentacao?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    capacidade_maxima?: SortOrderInput | SortOrder
    tipo_posicao?: SortOrderInput | SortOrder
    _count?: posicoes_estoqueCountOrderByAggregateInput
    _avg?: posicoes_estoqueAvgOrderByAggregateInput
    _max?: posicoes_estoqueMaxOrderByAggregateInput
    _min?: posicoes_estoqueMinOrderByAggregateInput
    _sum?: posicoes_estoqueSumOrderByAggregateInput
  }

  export type posicoes_estoqueScalarWhereWithAggregatesInput = {
    AND?: posicoes_estoqueScalarWhereWithAggregatesInput | posicoes_estoqueScalarWhereWithAggregatesInput[]
    OR?: posicoes_estoqueScalarWhereWithAggregatesInput[]
    NOT?: posicoes_estoqueScalarWhereWithAggregatesInput | posicoes_estoqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posicoes_estoque"> | number
    endereco?: StringWithAggregatesFilter<"posicoes_estoque"> | string
    status?: StringNullableWithAggregatesFilter<"posicoes_estoque"> | string | null
    produto_id?: IntNullableWithAggregatesFilter<"posicoes_estoque"> | number | null
    lote_id?: IntNullableWithAggregatesFilter<"posicoes_estoque"> | number | null
    quantidade?: IntNullableWithAggregatesFilter<"posicoes_estoque"> | number | null
    ultima_movimentacao?: DateTimeNullableWithAggregatesFilter<"posicoes_estoque"> | Date | string | null
    observacoes?: StringNullableWithAggregatesFilter<"posicoes_estoque"> | string | null
    capacidade_maxima?: IntNullableWithAggregatesFilter<"posicoes_estoque"> | number | null
    tipo_posicao?: StringNullableWithAggregatesFilter<"posicoes_estoque"> | string | null
  }

  export type subcategoriasWhereInput = {
    AND?: subcategoriasWhereInput | subcategoriasWhereInput[]
    OR?: subcategoriasWhereInput[]
    NOT?: subcategoriasWhereInput | subcategoriasWhereInput[]
    id?: IntFilter<"subcategorias"> | number
    categoria_id?: IntFilter<"subcategorias"> | number
    nome?: StringFilter<"subcategorias"> | string
    descricao?: StringNullableFilter<"subcategorias"> | string | null
    codigo?: StringNullableFilter<"subcategorias"> | string | null
    produtos?: ProdutosListRelationFilter
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
  }

  export type subcategoriasOrderByWithRelationInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    produtos?: produtosOrderByRelationAggregateInput
    categorias?: categoriasOrderByWithRelationInput
  }

  export type subcategoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: subcategoriasWhereInput | subcategoriasWhereInput[]
    OR?: subcategoriasWhereInput[]
    NOT?: subcategoriasWhereInput | subcategoriasWhereInput[]
    categoria_id?: IntFilter<"subcategorias"> | number
    nome?: StringFilter<"subcategorias"> | string
    descricao?: StringNullableFilter<"subcategorias"> | string | null
    produtos?: ProdutosListRelationFilter
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
  }, "id" | "codigo">

  export type subcategoriasOrderByWithAggregationInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    _count?: subcategoriasCountOrderByAggregateInput
    _avg?: subcategoriasAvgOrderByAggregateInput
    _max?: subcategoriasMaxOrderByAggregateInput
    _min?: subcategoriasMinOrderByAggregateInput
    _sum?: subcategoriasSumOrderByAggregateInput
  }

  export type subcategoriasScalarWhereWithAggregatesInput = {
    AND?: subcategoriasScalarWhereWithAggregatesInput | subcategoriasScalarWhereWithAggregatesInput[]
    OR?: subcategoriasScalarWhereWithAggregatesInput[]
    NOT?: subcategoriasScalarWhereWithAggregatesInput | subcategoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subcategorias"> | number
    categoria_id?: IntWithAggregatesFilter<"subcategorias"> | number
    nome?: StringWithAggregatesFilter<"subcategorias"> | string
    descricao?: StringNullableWithAggregatesFilter<"subcategorias"> | string | null
    codigo?: StringNullableWithAggregatesFilter<"subcategorias"> | string | null
  }

  export type categoriasCreateInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosCreateNestedManyWithoutCategoriasInput
    subcategorias?: subcategoriasCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosUncheckedCreateNestedManyWithoutCategoriasInput
    subcategorias?: subcategoriasUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUpdateManyWithoutCategoriasNestedInput
    subcategorias?: subcategoriasUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUncheckedUpdateManyWithoutCategoriasNestedInput
    subcategorias?: subcategoriasUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
  }

  export type categoriasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosCreateInput = {
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueCreateNestedManyWithoutProdutosInput
    categorias?: categoriasCreateNestedOneWithoutProdutosInput
    subcategorias?: subcategoriasCreateNestedOneWithoutProdutosInput
  }

  export type produtosUncheckedCreateInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesUncheckedCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUpdateManyWithoutProdutosNestedInput
    categorias?: categoriasUpdateOneWithoutProdutosNestedInput
    subcategorias?: subcategoriasUpdateOneWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUncheckedUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type produtosCreateManyInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
  }

  export type produtosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modelos_motoCreateInput = {
    nome: string
    marca?: string | null
    ano_inicio?: number | null
    ano_fim?: number | null
    cilindrada?: number | null
    tipo?: string | null
    descricao?: string | null
    imagem_url?: string | null
    status?: string | null
    data_cadastro?: Date | string | null
  }

  export type modelos_motoUncheckedCreateInput = {
    id?: number
    nome: string
    marca?: string | null
    ano_inicio?: number | null
    ano_fim?: number | null
    cilindrada?: number | null
    tipo?: string | null
    descricao?: string | null
    imagem_url?: string | null
    status?: string | null
    data_cadastro?: Date | string | null
  }

  export type modelos_motoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    ano_inicio?: NullableIntFieldUpdateOperationsInput | number | null
    ano_fim?: NullableIntFieldUpdateOperationsInput | number | null
    cilindrada?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type modelos_motoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    ano_inicio?: NullableIntFieldUpdateOperationsInput | number | null
    ano_fim?: NullableIntFieldUpdateOperationsInput | number | null
    cilindrada?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type modelos_motoCreateManyInput = {
    id?: number
    nome: string
    marca?: string | null
    ano_inicio?: number | null
    ano_fim?: number | null
    cilindrada?: number | null
    tipo?: string | null
    descricao?: string | null
    imagem_url?: string | null
    status?: string | null
    data_cadastro?: Date | string | null
  }

  export type modelos_motoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    ano_inicio?: NullableIntFieldUpdateOperationsInput | number | null
    ano_fim?: NullableIntFieldUpdateOperationsInput | number | null
    cilindrada?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type modelos_motoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    ano_inicio?: NullableIntFieldUpdateOperationsInput | number | null
    ano_fim?: NullableIntFieldUpdateOperationsInput | number | null
    cilindrada?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimentacoesCreateInput = {
    lote_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    produtos: produtosCreateNestedOneWithoutMovimentacoesInput
  }

  export type movimentacoesUncheckedCreateInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUpdateInput = {
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type movimentacoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesCreateManyInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUpdateManyMutationInput = {
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type posicoes_estoqueCreateInput = {
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    produtos?: produtosCreateNestedOneWithoutPosicoes_estoqueInput
  }

  export type posicoes_estoqueUncheckedCreateInput = {
    id?: number
    endereco: string
    status?: string | null
    produto_id?: number | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
  }

  export type posicoes_estoqueUpdateInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneWithoutPosicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
  }

  export type posicoes_estoqueCreateManyInput = {
    id?: number
    endereco: string
    status?: string | null
    produto_id?: number | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
  }

  export type posicoes_estoqueUpdateManyMutationInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posicoes_estoqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcategoriasCreateInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosCreateNestedManyWithoutSubcategoriasInput
    categorias: categoriasCreateNestedOneWithoutSubcategoriasInput
  }

  export type subcategoriasUncheckedCreateInput = {
    id?: number
    categoria_id: number
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosUncheckedCreateNestedManyWithoutSubcategoriasInput
  }

  export type subcategoriasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUpdateManyWithoutSubcategoriasNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutSubcategoriasNestedInput
  }

  export type subcategoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUncheckedUpdateManyWithoutSubcategoriasNestedInput
  }

  export type subcategoriasCreateManyInput = {
    id?: number
    categoria_id: number
    nome: string
    descricao?: string | null
    codigo?: string | null
  }

  export type subcategoriasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcategoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ProdutosListRelationFilter = {
    every?: produtosWhereInput
    some?: produtosWhereInput
    none?: produtosWhereInput
  }

  export type SubcategoriasListRelationFilter = {
    every?: subcategoriasWhereInput
    some?: subcategoriasWhereInput
    none?: subcategoriasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type produtosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subcategoriasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MovimentacoesListRelationFilter = {
    every?: movimentacoesWhereInput
    some?: movimentacoesWhereInput
    none?: movimentacoesWhereInput
  }

  export type Posicoes_estoqueListRelationFilter = {
    every?: posicoes_estoqueWhereInput
    some?: posicoes_estoqueWhereInput
    none?: posicoes_estoqueWhereInput
  }

  export type CategoriasNullableScalarRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type SubcategoriasNullableScalarRelationFilter = {
    is?: subcategoriasWhereInput | null
    isNot?: subcategoriasWhereInput | null
  }

  export type movimentacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type posicoes_estoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    peso_unitario?: SortOrder
    volume?: SortOrder
    tipo_embalagem?: SortOrder
    descricao?: SortOrder
    codigo_barras?: SortOrder
    preco_custo?: SortOrder
    preco_venda?: SortOrder
    estoque_minimo?: SortOrder
    estoque_maximo?: SortOrder
    ponto_reposicao?: SortOrder
    lead_time?: SortOrder
    status?: SortOrder
    unidade_medida?: SortOrder
    categoria_id?: SortOrder
    subcategoria_id?: SortOrder
    fornecedor_principal_id?: SortOrder
    data_cadastro?: SortOrder
    imagem_url?: SortOrder
  }

  export type produtosAvgOrderByAggregateInput = {
    id?: SortOrder
    peso_unitario?: SortOrder
    volume?: SortOrder
    preco_custo?: SortOrder
    preco_venda?: SortOrder
    estoque_minimo?: SortOrder
    estoque_maximo?: SortOrder
    ponto_reposicao?: SortOrder
    lead_time?: SortOrder
    categoria_id?: SortOrder
    subcategoria_id?: SortOrder
    fornecedor_principal_id?: SortOrder
  }

  export type produtosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    peso_unitario?: SortOrder
    volume?: SortOrder
    tipo_embalagem?: SortOrder
    descricao?: SortOrder
    codigo_barras?: SortOrder
    preco_custo?: SortOrder
    preco_venda?: SortOrder
    estoque_minimo?: SortOrder
    estoque_maximo?: SortOrder
    ponto_reposicao?: SortOrder
    lead_time?: SortOrder
    status?: SortOrder
    unidade_medida?: SortOrder
    categoria_id?: SortOrder
    subcategoria_id?: SortOrder
    fornecedor_principal_id?: SortOrder
    data_cadastro?: SortOrder
    imagem_url?: SortOrder
  }

  export type produtosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    peso_unitario?: SortOrder
    volume?: SortOrder
    tipo_embalagem?: SortOrder
    descricao?: SortOrder
    codigo_barras?: SortOrder
    preco_custo?: SortOrder
    preco_venda?: SortOrder
    estoque_minimo?: SortOrder
    estoque_maximo?: SortOrder
    ponto_reposicao?: SortOrder
    lead_time?: SortOrder
    status?: SortOrder
    unidade_medida?: SortOrder
    categoria_id?: SortOrder
    subcategoria_id?: SortOrder
    fornecedor_principal_id?: SortOrder
    data_cadastro?: SortOrder
    imagem_url?: SortOrder
  }

  export type produtosSumOrderByAggregateInput = {
    id?: SortOrder
    peso_unitario?: SortOrder
    volume?: SortOrder
    preco_custo?: SortOrder
    preco_venda?: SortOrder
    estoque_minimo?: SortOrder
    estoque_maximo?: SortOrder
    ponto_reposicao?: SortOrder
    lead_time?: SortOrder
    categoria_id?: SortOrder
    subcategoria_id?: SortOrder
    fornecedor_principal_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type modelos_motoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    ano_inicio?: SortOrder
    ano_fim?: SortOrder
    cilindrada?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    imagem_url?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type modelos_motoAvgOrderByAggregateInput = {
    id?: SortOrder
    ano_inicio?: SortOrder
    ano_fim?: SortOrder
    cilindrada?: SortOrder
  }

  export type modelos_motoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    ano_inicio?: SortOrder
    ano_fim?: SortOrder
    cilindrada?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    imagem_url?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type modelos_motoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    ano_inicio?: SortOrder
    ano_fim?: SortOrder
    cilindrada?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    imagem_url?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type modelos_motoSumOrderByAggregateInput = {
    id?: SortOrder
    ano_inicio?: SortOrder
    ano_fim?: SortOrder
    cilindrada?: SortOrder
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

  export type Posicoes_estoqueNullableScalarRelationFilter = {
    is?: posicoes_estoqueWhereInput | null
    isNot?: posicoes_estoqueWhereInput | null
  }

  export type ProdutosScalarRelationFilter = {
    is?: produtosWhereInput
    isNot?: produtosWhereInput
  }

  export type movimentacoesCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    posicao_origem_id?: SortOrder
    posicao_destino_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_hora?: SortOrder
    responsavel_id?: SortOrder
    documento_id?: SortOrder
    motivo?: SortOrder
    observacoes?: SortOrder
    custo_unitario?: SortOrder
  }

  export type movimentacoesAvgOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    posicao_origem_id?: SortOrder
    posicao_destino_id?: SortOrder
    quantidade?: SortOrder
    responsavel_id?: SortOrder
    documento_id?: SortOrder
    custo_unitario?: SortOrder
  }

  export type movimentacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    posicao_origem_id?: SortOrder
    posicao_destino_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_hora?: SortOrder
    responsavel_id?: SortOrder
    documento_id?: SortOrder
    motivo?: SortOrder
    observacoes?: SortOrder
    custo_unitario?: SortOrder
  }

  export type movimentacoesMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    posicao_origem_id?: SortOrder
    posicao_destino_id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    data_hora?: SortOrder
    responsavel_id?: SortOrder
    documento_id?: SortOrder
    motivo?: SortOrder
    observacoes?: SortOrder
    custo_unitario?: SortOrder
  }

  export type movimentacoesSumOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    posicao_origem_id?: SortOrder
    posicao_destino_id?: SortOrder
    quantidade?: SortOrder
    responsavel_id?: SortOrder
    documento_id?: SortOrder
    custo_unitario?: SortOrder
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

  export type ProdutosNullableScalarRelationFilter = {
    is?: produtosWhereInput | null
    isNot?: produtosWhereInput | null
  }

  export type posicoes_estoqueCountOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    quantidade?: SortOrder
    ultima_movimentacao?: SortOrder
    observacoes?: SortOrder
    capacidade_maxima?: SortOrder
    tipo_posicao?: SortOrder
  }

  export type posicoes_estoqueAvgOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    quantidade?: SortOrder
    capacidade_maxima?: SortOrder
  }

  export type posicoes_estoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    quantidade?: SortOrder
    ultima_movimentacao?: SortOrder
    observacoes?: SortOrder
    capacidade_maxima?: SortOrder
    tipo_posicao?: SortOrder
  }

  export type posicoes_estoqueMinOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
    status?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    quantidade?: SortOrder
    ultima_movimentacao?: SortOrder
    observacoes?: SortOrder
    capacidade_maxima?: SortOrder
    tipo_posicao?: SortOrder
  }

  export type posicoes_estoqueSumOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    lote_id?: SortOrder
    quantidade?: SortOrder
    capacidade_maxima?: SortOrder
  }

  export type CategoriasScalarRelationFilter = {
    is?: categoriasWhereInput
    isNot?: categoriasWhereInput
  }

  export type subcategoriasCountOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type subcategoriasAvgOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
  }

  export type subcategoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type subcategoriasMinOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigo?: SortOrder
  }

  export type subcategoriasSumOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
  }

  export type produtosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput> | produtosCreateWithoutCategoriasInput[] | produtosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutCategoriasInput | produtosCreateOrConnectWithoutCategoriasInput[]
    createMany?: produtosCreateManyCategoriasInputEnvelope
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
  }

  export type subcategoriasCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput> | subcategoriasCreateWithoutCategoriasInput[] | subcategoriasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: subcategoriasCreateOrConnectWithoutCategoriasInput | subcategoriasCreateOrConnectWithoutCategoriasInput[]
    createMany?: subcategoriasCreateManyCategoriasInputEnvelope
    connect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
  }

  export type produtosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput> | produtosCreateWithoutCategoriasInput[] | produtosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutCategoriasInput | produtosCreateOrConnectWithoutCategoriasInput[]
    createMany?: produtosCreateManyCategoriasInputEnvelope
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
  }

  export type subcategoriasUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput> | subcategoriasCreateWithoutCategoriasInput[] | subcategoriasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: subcategoriasCreateOrConnectWithoutCategoriasInput | subcategoriasCreateOrConnectWithoutCategoriasInput[]
    createMany?: subcategoriasCreateManyCategoriasInputEnvelope
    connect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type produtosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput> | produtosCreateWithoutCategoriasInput[] | produtosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutCategoriasInput | produtosCreateOrConnectWithoutCategoriasInput[]
    upsert?: produtosUpsertWithWhereUniqueWithoutCategoriasInput | produtosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: produtosCreateManyCategoriasInputEnvelope
    set?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    disconnect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    delete?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    update?: produtosUpdateWithWhereUniqueWithoutCategoriasInput | produtosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: produtosUpdateManyWithWhereWithoutCategoriasInput | produtosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: produtosScalarWhereInput | produtosScalarWhereInput[]
  }

  export type subcategoriasUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput> | subcategoriasCreateWithoutCategoriasInput[] | subcategoriasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: subcategoriasCreateOrConnectWithoutCategoriasInput | subcategoriasCreateOrConnectWithoutCategoriasInput[]
    upsert?: subcategoriasUpsertWithWhereUniqueWithoutCategoriasInput | subcategoriasUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: subcategoriasCreateManyCategoriasInputEnvelope
    set?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    disconnect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    delete?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    connect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    update?: subcategoriasUpdateWithWhereUniqueWithoutCategoriasInput | subcategoriasUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: subcategoriasUpdateManyWithWhereWithoutCategoriasInput | subcategoriasUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: subcategoriasScalarWhereInput | subcategoriasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produtosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput> | produtosCreateWithoutCategoriasInput[] | produtosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutCategoriasInput | produtosCreateOrConnectWithoutCategoriasInput[]
    upsert?: produtosUpsertWithWhereUniqueWithoutCategoriasInput | produtosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: produtosCreateManyCategoriasInputEnvelope
    set?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    disconnect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    delete?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    update?: produtosUpdateWithWhereUniqueWithoutCategoriasInput | produtosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: produtosUpdateManyWithWhereWithoutCategoriasInput | produtosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: produtosScalarWhereInput | produtosScalarWhereInput[]
  }

  export type subcategoriasUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput> | subcategoriasCreateWithoutCategoriasInput[] | subcategoriasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: subcategoriasCreateOrConnectWithoutCategoriasInput | subcategoriasCreateOrConnectWithoutCategoriasInput[]
    upsert?: subcategoriasUpsertWithWhereUniqueWithoutCategoriasInput | subcategoriasUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: subcategoriasCreateManyCategoriasInputEnvelope
    set?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    disconnect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    delete?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    connect?: subcategoriasWhereUniqueInput | subcategoriasWhereUniqueInput[]
    update?: subcategoriasUpdateWithWhereUniqueWithoutCategoriasInput | subcategoriasUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: subcategoriasUpdateManyWithWhereWithoutCategoriasInput | subcategoriasUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: subcategoriasScalarWhereInput | subcategoriasScalarWhereInput[]
  }

  export type movimentacoesCreateNestedManyWithoutProdutosInput = {
    create?: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput> | movimentacoesCreateWithoutProdutosInput[] | movimentacoesUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutProdutosInput | movimentacoesCreateOrConnectWithoutProdutosInput[]
    createMany?: movimentacoesCreateManyProdutosInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type posicoes_estoqueCreateNestedManyWithoutProdutosInput = {
    create?: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput> | posicoes_estoqueCreateWithoutProdutosInput[] | posicoes_estoqueUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutProdutosInput | posicoes_estoqueCreateOrConnectWithoutProdutosInput[]
    createMany?: posicoes_estoqueCreateManyProdutosInputEnvelope
    connect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
  }

  export type categoriasCreateNestedOneWithoutProdutosInput = {
    create?: XOR<categoriasCreateWithoutProdutosInput, categoriasUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProdutosInput
    connect?: categoriasWhereUniqueInput
  }

  export type subcategoriasCreateNestedOneWithoutProdutosInput = {
    create?: XOR<subcategoriasCreateWithoutProdutosInput, subcategoriasUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: subcategoriasCreateOrConnectWithoutProdutosInput
    connect?: subcategoriasWhereUniqueInput
  }

  export type movimentacoesUncheckedCreateNestedManyWithoutProdutosInput = {
    create?: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput> | movimentacoesCreateWithoutProdutosInput[] | movimentacoesUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutProdutosInput | movimentacoesCreateOrConnectWithoutProdutosInput[]
    createMany?: movimentacoesCreateManyProdutosInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type posicoes_estoqueUncheckedCreateNestedManyWithoutProdutosInput = {
    create?: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput> | posicoes_estoqueCreateWithoutProdutosInput[] | posicoes_estoqueUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutProdutosInput | posicoes_estoqueCreateOrConnectWithoutProdutosInput[]
    createMany?: posicoes_estoqueCreateManyProdutosInputEnvelope
    connect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type movimentacoesUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput> | movimentacoesCreateWithoutProdutosInput[] | movimentacoesUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutProdutosInput | movimentacoesCreateOrConnectWithoutProdutosInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutProdutosInput | movimentacoesUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: movimentacoesCreateManyProdutosInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutProdutosInput | movimentacoesUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutProdutosInput | movimentacoesUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type posicoes_estoqueUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput> | posicoes_estoqueCreateWithoutProdutosInput[] | posicoes_estoqueUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutProdutosInput | posicoes_estoqueCreateOrConnectWithoutProdutosInput[]
    upsert?: posicoes_estoqueUpsertWithWhereUniqueWithoutProdutosInput | posicoes_estoqueUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: posicoes_estoqueCreateManyProdutosInputEnvelope
    set?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    disconnect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    delete?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    connect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    update?: posicoes_estoqueUpdateWithWhereUniqueWithoutProdutosInput | posicoes_estoqueUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: posicoes_estoqueUpdateManyWithWhereWithoutProdutosInput | posicoes_estoqueUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: posicoes_estoqueScalarWhereInput | posicoes_estoqueScalarWhereInput[]
  }

  export type categoriasUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<categoriasCreateWithoutProdutosInput, categoriasUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProdutosInput
    upsert?: categoriasUpsertWithoutProdutosInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProdutosInput, categoriasUpdateWithoutProdutosInput>, categoriasUncheckedUpdateWithoutProdutosInput>
  }

  export type subcategoriasUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<subcategoriasCreateWithoutProdutosInput, subcategoriasUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: subcategoriasCreateOrConnectWithoutProdutosInput
    upsert?: subcategoriasUpsertWithoutProdutosInput
    disconnect?: subcategoriasWhereInput | boolean
    delete?: subcategoriasWhereInput | boolean
    connect?: subcategoriasWhereUniqueInput
    update?: XOR<XOR<subcategoriasUpdateToOneWithWhereWithoutProdutosInput, subcategoriasUpdateWithoutProdutosInput>, subcategoriasUncheckedUpdateWithoutProdutosInput>
  }

  export type movimentacoesUncheckedUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput> | movimentacoesCreateWithoutProdutosInput[] | movimentacoesUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutProdutosInput | movimentacoesCreateOrConnectWithoutProdutosInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutProdutosInput | movimentacoesUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: movimentacoesCreateManyProdutosInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutProdutosInput | movimentacoesUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutProdutosInput | movimentacoesUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type posicoes_estoqueUncheckedUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput> | posicoes_estoqueCreateWithoutProdutosInput[] | posicoes_estoqueUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutProdutosInput | posicoes_estoqueCreateOrConnectWithoutProdutosInput[]
    upsert?: posicoes_estoqueUpsertWithWhereUniqueWithoutProdutosInput | posicoes_estoqueUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: posicoes_estoqueCreateManyProdutosInputEnvelope
    set?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    disconnect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    delete?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    connect?: posicoes_estoqueWhereUniqueInput | posicoes_estoqueWhereUniqueInput[]
    update?: posicoes_estoqueUpdateWithWhereUniqueWithoutProdutosInput | posicoes_estoqueUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: posicoes_estoqueUpdateManyWithWhereWithoutProdutosInput | posicoes_estoqueUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: posicoes_estoqueScalarWhereInput | posicoes_estoqueScalarWhereInput[]
  }

  export type posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    create?: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    connect?: posicoes_estoqueWhereUniqueInput
  }

  export type posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    create?: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    connect?: posicoes_estoqueWhereUniqueInput
  }

  export type produtosCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<produtosCreateWithoutMovimentacoesInput, produtosUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: produtosCreateOrConnectWithoutMovimentacoesInput
    connect?: produtosWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput = {
    create?: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    upsert?: posicoes_estoqueUpsertWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    disconnect?: posicoes_estoqueWhereInput | boolean
    delete?: posicoes_estoqueWhereInput | boolean
    connect?: posicoes_estoqueWhereUniqueInput
    update?: XOR<XOR<posicoes_estoqueUpdateToOneWithWhereWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput = {
    create?: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
    connectOrCreate?: posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    upsert?: posicoes_estoqueUpsertWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    disconnect?: posicoes_estoqueWhereInput | boolean
    delete?: posicoes_estoqueWhereInput | boolean
    connect?: posicoes_estoqueWhereUniqueInput
    update?: XOR<XOR<posicoes_estoqueUpdateToOneWithWhereWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type produtosUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<produtosCreateWithoutMovimentacoesInput, produtosUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: produtosCreateOrConnectWithoutMovimentacoesInput
    upsert?: produtosUpsertWithoutMovimentacoesInput
    connect?: produtosWhereUniqueInput
    update?: XOR<XOR<produtosUpdateToOneWithWhereWithoutMovimentacoesInput, produtosUpdateWithoutMovimentacoesInput>, produtosUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type produtosCreateNestedOneWithoutPosicoes_estoqueInput = {
    create?: XOR<produtosCreateWithoutPosicoes_estoqueInput, produtosUncheckedCreateWithoutPosicoes_estoqueInput>
    connectOrCreate?: produtosCreateOrConnectWithoutPosicoes_estoqueInput
    connect?: produtosWhereUniqueInput
  }

  export type movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInputEnvelope
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
  }

  export type movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type produtosUpdateOneWithoutPosicoes_estoqueNestedInput = {
    create?: XOR<produtosCreateWithoutPosicoes_estoqueInput, produtosUncheckedCreateWithoutPosicoes_estoqueInput>
    connectOrCreate?: produtosCreateOrConnectWithoutPosicoes_estoqueInput
    upsert?: produtosUpsertWithoutPosicoes_estoqueInput
    disconnect?: produtosWhereInput | boolean
    delete?: produtosWhereInput | boolean
    connect?: produtosWhereUniqueInput
    update?: XOR<XOR<produtosUpdateToOneWithWhereWithoutPosicoes_estoqueInput, produtosUpdateWithoutPosicoes_estoqueInput>, produtosUncheckedUpdateWithoutPosicoes_estoqueInput>
  }

  export type movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput = {
    create?: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput> | movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[] | movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    connectOrCreate?: movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    upsert?: movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    createMany?: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInputEnvelope
    set?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    disconnect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    delete?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    connect?: movimentacoesWhereUniqueInput | movimentacoesWhereUniqueInput[]
    update?: movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    updateMany?: movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    deleteMany?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
  }

  export type produtosCreateNestedManyWithoutSubcategoriasInput = {
    create?: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput> | produtosCreateWithoutSubcategoriasInput[] | produtosUncheckedCreateWithoutSubcategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutSubcategoriasInput | produtosCreateOrConnectWithoutSubcategoriasInput[]
    createMany?: produtosCreateManySubcategoriasInputEnvelope
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
  }

  export type categoriasCreateNestedOneWithoutSubcategoriasInput = {
    create?: XOR<categoriasCreateWithoutSubcategoriasInput, categoriasUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutSubcategoriasInput
    connect?: categoriasWhereUniqueInput
  }

  export type produtosUncheckedCreateNestedManyWithoutSubcategoriasInput = {
    create?: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput> | produtosCreateWithoutSubcategoriasInput[] | produtosUncheckedCreateWithoutSubcategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutSubcategoriasInput | produtosCreateOrConnectWithoutSubcategoriasInput[]
    createMany?: produtosCreateManySubcategoriasInputEnvelope
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
  }

  export type produtosUpdateManyWithoutSubcategoriasNestedInput = {
    create?: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput> | produtosCreateWithoutSubcategoriasInput[] | produtosUncheckedCreateWithoutSubcategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutSubcategoriasInput | produtosCreateOrConnectWithoutSubcategoriasInput[]
    upsert?: produtosUpsertWithWhereUniqueWithoutSubcategoriasInput | produtosUpsertWithWhereUniqueWithoutSubcategoriasInput[]
    createMany?: produtosCreateManySubcategoriasInputEnvelope
    set?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    disconnect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    delete?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    update?: produtosUpdateWithWhereUniqueWithoutSubcategoriasInput | produtosUpdateWithWhereUniqueWithoutSubcategoriasInput[]
    updateMany?: produtosUpdateManyWithWhereWithoutSubcategoriasInput | produtosUpdateManyWithWhereWithoutSubcategoriasInput[]
    deleteMany?: produtosScalarWhereInput | produtosScalarWhereInput[]
  }

  export type categoriasUpdateOneRequiredWithoutSubcategoriasNestedInput = {
    create?: XOR<categoriasCreateWithoutSubcategoriasInput, categoriasUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutSubcategoriasInput
    upsert?: categoriasUpsertWithoutSubcategoriasInput
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutSubcategoriasInput, categoriasUpdateWithoutSubcategoriasInput>, categoriasUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type produtosUncheckedUpdateManyWithoutSubcategoriasNestedInput = {
    create?: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput> | produtosCreateWithoutSubcategoriasInput[] | produtosUncheckedCreateWithoutSubcategoriasInput[]
    connectOrCreate?: produtosCreateOrConnectWithoutSubcategoriasInput | produtosCreateOrConnectWithoutSubcategoriasInput[]
    upsert?: produtosUpsertWithWhereUniqueWithoutSubcategoriasInput | produtosUpsertWithWhereUniqueWithoutSubcategoriasInput[]
    createMany?: produtosCreateManySubcategoriasInputEnvelope
    set?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    disconnect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    delete?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    connect?: produtosWhereUniqueInput | produtosWhereUniqueInput[]
    update?: produtosUpdateWithWhereUniqueWithoutSubcategoriasInput | produtosUpdateWithWhereUniqueWithoutSubcategoriasInput[]
    updateMany?: produtosUpdateManyWithWhereWithoutSubcategoriasInput | produtosUpdateManyWithWhereWithoutSubcategoriasInput[]
    deleteMany?: produtosScalarWhereInput | produtosScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type produtosCreateWithoutCategoriasInput = {
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueCreateNestedManyWithoutProdutosInput
    subcategorias?: subcategoriasCreateNestedOneWithoutProdutosInput
  }

  export type produtosUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesUncheckedCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosCreateOrConnectWithoutCategoriasInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput>
  }

  export type produtosCreateManyCategoriasInputEnvelope = {
    data: produtosCreateManyCategoriasInput | produtosCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type subcategoriasCreateWithoutCategoriasInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosCreateNestedManyWithoutSubcategoriasInput
  }

  export type subcategoriasUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosUncheckedCreateNestedManyWithoutSubcategoriasInput
  }

  export type subcategoriasCreateOrConnectWithoutCategoriasInput = {
    where: subcategoriasWhereUniqueInput
    create: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput>
  }

  export type subcategoriasCreateManyCategoriasInputEnvelope = {
    data: subcategoriasCreateManyCategoriasInput | subcategoriasCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type produtosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: produtosWhereUniqueInput
    update: XOR<produtosUpdateWithoutCategoriasInput, produtosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<produtosCreateWithoutCategoriasInput, produtosUncheckedCreateWithoutCategoriasInput>
  }

  export type produtosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: produtosWhereUniqueInput
    data: XOR<produtosUpdateWithoutCategoriasInput, produtosUncheckedUpdateWithoutCategoriasInput>
  }

  export type produtosUpdateManyWithWhereWithoutCategoriasInput = {
    where: produtosScalarWhereInput
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type produtosScalarWhereInput = {
    AND?: produtosScalarWhereInput | produtosScalarWhereInput[]
    OR?: produtosScalarWhereInput[]
    NOT?: produtosScalarWhereInput | produtosScalarWhereInput[]
    id?: IntFilter<"produtos"> | number
    nome?: StringFilter<"produtos"> | string
    sku?: StringFilter<"produtos"> | string
    peso_unitario?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    volume?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: StringNullableFilter<"produtos"> | string | null
    descricao?: StringNullableFilter<"produtos"> | string | null
    codigo_barras?: StringNullableFilter<"produtos"> | string | null
    preco_custo?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    preco_venda?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: IntNullableFilter<"produtos"> | number | null
    estoque_maximo?: IntNullableFilter<"produtos"> | number | null
    ponto_reposicao?: IntNullableFilter<"produtos"> | number | null
    lead_time?: IntNullableFilter<"produtos"> | number | null
    status?: StringNullableFilter<"produtos"> | string | null
    unidade_medida?: StringNullableFilter<"produtos"> | string | null
    categoria_id?: IntNullableFilter<"produtos"> | number | null
    subcategoria_id?: IntNullableFilter<"produtos"> | number | null
    fornecedor_principal_id?: IntNullableFilter<"produtos"> | number | null
    data_cadastro?: DateTimeNullableFilter<"produtos"> | Date | string | null
    imagem_url?: StringNullableFilter<"produtos"> | string | null
  }

  export type subcategoriasUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: subcategoriasWhereUniqueInput
    update: XOR<subcategoriasUpdateWithoutCategoriasInput, subcategoriasUncheckedUpdateWithoutCategoriasInput>
    create: XOR<subcategoriasCreateWithoutCategoriasInput, subcategoriasUncheckedCreateWithoutCategoriasInput>
  }

  export type subcategoriasUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: subcategoriasWhereUniqueInput
    data: XOR<subcategoriasUpdateWithoutCategoriasInput, subcategoriasUncheckedUpdateWithoutCategoriasInput>
  }

  export type subcategoriasUpdateManyWithWhereWithoutCategoriasInput = {
    where: subcategoriasScalarWhereInput
    data: XOR<subcategoriasUpdateManyMutationInput, subcategoriasUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type subcategoriasScalarWhereInput = {
    AND?: subcategoriasScalarWhereInput | subcategoriasScalarWhereInput[]
    OR?: subcategoriasScalarWhereInput[]
    NOT?: subcategoriasScalarWhereInput | subcategoriasScalarWhereInput[]
    id?: IntFilter<"subcategorias"> | number
    categoria_id?: IntFilter<"subcategorias"> | number
    nome?: StringFilter<"subcategorias"> | string
    descricao?: StringNullableFilter<"subcategorias"> | string | null
    codigo?: StringNullableFilter<"subcategorias"> | string | null
  }

  export type movimentacoesCreateWithoutProdutosInput = {
    lote_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
  }

  export type movimentacoesUncheckedCreateWithoutProdutosInput = {
    id?: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesCreateOrConnectWithoutProdutosInput = {
    where: movimentacoesWhereUniqueInput
    create: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput>
  }

  export type movimentacoesCreateManyProdutosInputEnvelope = {
    data: movimentacoesCreateManyProdutosInput | movimentacoesCreateManyProdutosInput[]
    skipDuplicates?: boolean
  }

  export type posicoes_estoqueCreateWithoutProdutosInput = {
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
  }

  export type posicoes_estoqueUncheckedCreateWithoutProdutosInput = {
    id?: number
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
  }

  export type posicoes_estoqueCreateOrConnectWithoutProdutosInput = {
    where: posicoes_estoqueWhereUniqueInput
    create: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput>
  }

  export type posicoes_estoqueCreateManyProdutosInputEnvelope = {
    data: posicoes_estoqueCreateManyProdutosInput | posicoes_estoqueCreateManyProdutosInput[]
    skipDuplicates?: boolean
  }

  export type categoriasCreateWithoutProdutosInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    subcategorias?: subcategoriasCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
    subcategorias?: subcategoriasUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasCreateOrConnectWithoutProdutosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProdutosInput, categoriasUncheckedCreateWithoutProdutosInput>
  }

  export type subcategoriasCreateWithoutProdutosInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    categorias: categoriasCreateNestedOneWithoutSubcategoriasInput
  }

  export type subcategoriasUncheckedCreateWithoutProdutosInput = {
    id?: number
    categoria_id: number
    nome: string
    descricao?: string | null
    codigo?: string | null
  }

  export type subcategoriasCreateOrConnectWithoutProdutosInput = {
    where: subcategoriasWhereUniqueInput
    create: XOR<subcategoriasCreateWithoutProdutosInput, subcategoriasUncheckedCreateWithoutProdutosInput>
  }

  export type movimentacoesUpsertWithWhereUniqueWithoutProdutosInput = {
    where: movimentacoesWhereUniqueInput
    update: XOR<movimentacoesUpdateWithoutProdutosInput, movimentacoesUncheckedUpdateWithoutProdutosInput>
    create: XOR<movimentacoesCreateWithoutProdutosInput, movimentacoesUncheckedCreateWithoutProdutosInput>
  }

  export type movimentacoesUpdateWithWhereUniqueWithoutProdutosInput = {
    where: movimentacoesWhereUniqueInput
    data: XOR<movimentacoesUpdateWithoutProdutosInput, movimentacoesUncheckedUpdateWithoutProdutosInput>
  }

  export type movimentacoesUpdateManyWithWhereWithoutProdutosInput = {
    where: movimentacoesScalarWhereInput
    data: XOR<movimentacoesUpdateManyMutationInput, movimentacoesUncheckedUpdateManyWithoutProdutosInput>
  }

  export type movimentacoesScalarWhereInput = {
    AND?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
    OR?: movimentacoesScalarWhereInput[]
    NOT?: movimentacoesScalarWhereInput | movimentacoesScalarWhereInput[]
    id?: IntFilter<"movimentacoes"> | number
    produto_id?: IntFilter<"movimentacoes"> | number
    lote_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_origem_id?: IntNullableFilter<"movimentacoes"> | number | null
    posicao_destino_id?: IntNullableFilter<"movimentacoes"> | number | null
    tipo?: StringNullableFilter<"movimentacoes"> | string | null
    quantidade?: IntFilter<"movimentacoes"> | number
    data_hora?: DateTimeFilter<"movimentacoes"> | Date | string
    responsavel_id?: IntNullableFilter<"movimentacoes"> | number | null
    documento_id?: IntNullableFilter<"movimentacoes"> | number | null
    motivo?: StringNullableFilter<"movimentacoes"> | string | null
    observacoes?: StringNullableFilter<"movimentacoes"> | string | null
    custo_unitario?: DecimalNullableFilter<"movimentacoes"> | Decimal | DecimalJsLike | number | string | null
  }

  export type posicoes_estoqueUpsertWithWhereUniqueWithoutProdutosInput = {
    where: posicoes_estoqueWhereUniqueInput
    update: XOR<posicoes_estoqueUpdateWithoutProdutosInput, posicoes_estoqueUncheckedUpdateWithoutProdutosInput>
    create: XOR<posicoes_estoqueCreateWithoutProdutosInput, posicoes_estoqueUncheckedCreateWithoutProdutosInput>
  }

  export type posicoes_estoqueUpdateWithWhereUniqueWithoutProdutosInput = {
    where: posicoes_estoqueWhereUniqueInput
    data: XOR<posicoes_estoqueUpdateWithoutProdutosInput, posicoes_estoqueUncheckedUpdateWithoutProdutosInput>
  }

  export type posicoes_estoqueUpdateManyWithWhereWithoutProdutosInput = {
    where: posicoes_estoqueScalarWhereInput
    data: XOR<posicoes_estoqueUpdateManyMutationInput, posicoes_estoqueUncheckedUpdateManyWithoutProdutosInput>
  }

  export type posicoes_estoqueScalarWhereInput = {
    AND?: posicoes_estoqueScalarWhereInput | posicoes_estoqueScalarWhereInput[]
    OR?: posicoes_estoqueScalarWhereInput[]
    NOT?: posicoes_estoqueScalarWhereInput | posicoes_estoqueScalarWhereInput[]
    id?: IntFilter<"posicoes_estoque"> | number
    endereco?: StringFilter<"posicoes_estoque"> | string
    status?: StringNullableFilter<"posicoes_estoque"> | string | null
    produto_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    lote_id?: IntNullableFilter<"posicoes_estoque"> | number | null
    quantidade?: IntNullableFilter<"posicoes_estoque"> | number | null
    ultima_movimentacao?: DateTimeNullableFilter<"posicoes_estoque"> | Date | string | null
    observacoes?: StringNullableFilter<"posicoes_estoque"> | string | null
    capacidade_maxima?: IntNullableFilter<"posicoes_estoque"> | number | null
    tipo_posicao?: StringNullableFilter<"posicoes_estoque"> | string | null
  }

  export type categoriasUpsertWithoutProdutosInput = {
    update: XOR<categoriasUpdateWithoutProdutosInput, categoriasUncheckedUpdateWithoutProdutosInput>
    create: XOR<categoriasCreateWithoutProdutosInput, categoriasUncheckedCreateWithoutProdutosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProdutosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProdutosInput, categoriasUncheckedUpdateWithoutProdutosInput>
  }

  export type categoriasUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: subcategoriasUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: subcategoriasUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type subcategoriasUpsertWithoutProdutosInput = {
    update: XOR<subcategoriasUpdateWithoutProdutosInput, subcategoriasUncheckedUpdateWithoutProdutosInput>
    create: XOR<subcategoriasCreateWithoutProdutosInput, subcategoriasUncheckedCreateWithoutProdutosInput>
    where?: subcategoriasWhereInput
  }

  export type subcategoriasUpdateToOneWithWhereWithoutProdutosInput = {
    where?: subcategoriasWhereInput
    data: XOR<subcategoriasUpdateWithoutProdutosInput, subcategoriasUncheckedUpdateWithoutProdutosInput>
  }

  export type subcategoriasUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: categoriasUpdateOneRequiredWithoutSubcategoriasNestedInput
  }

  export type subcategoriasUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    produtos?: produtosCreateNestedOneWithoutPosicoes_estoqueInput
  }

  export type posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: number
    endereco: string
    status?: string | null
    produto_id?: number | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput
  }

  export type posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where: posicoes_estoqueWhereUniqueInput
    create: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    produtos?: produtosCreateNestedOneWithoutPosicoes_estoqueInput
  }

  export type posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: number
    endereco: string
    status?: string | null
    produto_id?: number | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedCreateNestedManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput
  }

  export type posicoes_estoqueCreateOrConnectWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where: posicoes_estoqueWhereUniqueInput
    create: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type produtosCreateWithoutMovimentacoesInput = {
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    posicoes_estoque?: posicoes_estoqueCreateNestedManyWithoutProdutosInput
    categorias?: categoriasCreateNestedOneWithoutProdutosInput
    subcategorias?: subcategoriasCreateNestedOneWithoutProdutosInput
  }

  export type produtosUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    posicoes_estoque?: posicoes_estoqueUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosCreateOrConnectWithoutMovimentacoesInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutMovimentacoesInput, produtosUncheckedCreateWithoutMovimentacoesInput>
  }

  export type posicoes_estoqueUpsertWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    update: XOR<posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
    create: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
    where?: posicoes_estoqueWhereInput
  }

  export type posicoes_estoqueUpdateToOneWithWhereWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where?: posicoes_estoqueWhereInput
    data: XOR<posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneWithoutPosicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUpsertWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    update: XOR<posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
    create: XOR<posicoes_estoqueCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedCreateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
    where?: posicoes_estoqueWhereInput
  }

  export type posicoes_estoqueUpdateToOneWithWhereWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where?: posicoes_estoqueWhereInput
    data: XOR<posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput, posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type posicoes_estoqueUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneWithoutPosicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUncheckedUpdateWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
  }

  export type produtosUpsertWithoutMovimentacoesInput = {
    update: XOR<produtosUpdateWithoutMovimentacoesInput, produtosUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<produtosCreateWithoutMovimentacoesInput, produtosUncheckedCreateWithoutMovimentacoesInput>
    where?: produtosWhereInput
  }

  export type produtosUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: produtosWhereInput
    data: XOR<produtosUpdateWithoutMovimentacoesInput, produtosUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type produtosUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    posicoes_estoque?: posicoes_estoqueUpdateManyWithoutProdutosNestedInput
    categorias?: categoriasUpdateOneWithoutProdutosNestedInput
    subcategorias?: subcategoriasUpdateOneWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    posicoes_estoque?: posicoes_estoqueUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    lote_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueInput
    produtos: produtosCreateNestedOneWithoutMovimentacoesInput
  }

  export type movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    create: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInputEnvelope = {
    data: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput | movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput[]
    skipDuplicates?: boolean
  }

  export type movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    lote_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueCreateNestedOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueInput
    produtos: produtosCreateNestedOneWithoutMovimentacoesInput
  }

  export type movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesCreateOrConnectWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    create: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInputEnvelope = {
    data: movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput | movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput[]
    skipDuplicates?: boolean
  }

  export type produtosCreateWithoutPosicoes_estoqueInput = {
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesCreateNestedManyWithoutProdutosInput
    categorias?: categoriasCreateNestedOneWithoutProdutosInput
    subcategorias?: subcategoriasCreateNestedOneWithoutProdutosInput
  }

  export type produtosUncheckedCreateWithoutPosicoes_estoqueInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosCreateOrConnectWithoutPosicoes_estoqueInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutPosicoes_estoqueInput, produtosUncheckedCreateWithoutPosicoes_estoqueInput>
  }

  export type movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    update: XOR<movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
    create: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    data: XOR<movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput, movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    where: movimentacoesScalarWhereInput
    data: XOR<movimentacoesUpdateManyMutationInput, movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput>
  }

  export type movimentacoesUpsertWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    update: XOR<movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
    create: XOR<movimentacoesCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedCreateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type movimentacoesUpdateWithWhereUniqueWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where: movimentacoesWhereUniqueInput
    data: XOR<movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput, movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type movimentacoesUpdateManyWithWhereWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    where: movimentacoesScalarWhereInput
    data: XOR<movimentacoesUpdateManyMutationInput, movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput>
  }

  export type produtosUpsertWithoutPosicoes_estoqueInput = {
    update: XOR<produtosUpdateWithoutPosicoes_estoqueInput, produtosUncheckedUpdateWithoutPosicoes_estoqueInput>
    create: XOR<produtosCreateWithoutPosicoes_estoqueInput, produtosUncheckedCreateWithoutPosicoes_estoqueInput>
    where?: produtosWhereInput
  }

  export type produtosUpdateToOneWithWhereWithoutPosicoes_estoqueInput = {
    where?: produtosWhereInput
    data: XOR<produtosUpdateWithoutPosicoes_estoqueInput, produtosUncheckedUpdateWithoutPosicoes_estoqueInput>
  }

  export type produtosUpdateWithoutPosicoes_estoqueInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUpdateManyWithoutProdutosNestedInput
    categorias?: categoriasUpdateOneWithoutProdutosNestedInput
    subcategorias?: subcategoriasUpdateOneWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateWithoutPosicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type produtosCreateWithoutSubcategoriasInput = {
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueCreateNestedManyWithoutProdutosInput
    categorias?: categoriasCreateNestedOneWithoutProdutosInput
  }

  export type produtosUncheckedCreateWithoutSubcategoriasInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
    movimentacoes?: movimentacoesUncheckedCreateNestedManyWithoutProdutosInput
    posicoes_estoque?: posicoes_estoqueUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosCreateOrConnectWithoutSubcategoriasInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput>
  }

  export type produtosCreateManySubcategoriasInputEnvelope = {
    data: produtosCreateManySubcategoriasInput | produtosCreateManySubcategoriasInput[]
    skipDuplicates?: boolean
  }

  export type categoriasCreateWithoutSubcategoriasInput = {
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateWithoutSubcategoriasInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
    produtos?: produtosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasCreateOrConnectWithoutSubcategoriasInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutSubcategoriasInput, categoriasUncheckedCreateWithoutSubcategoriasInput>
  }

  export type produtosUpsertWithWhereUniqueWithoutSubcategoriasInput = {
    where: produtosWhereUniqueInput
    update: XOR<produtosUpdateWithoutSubcategoriasInput, produtosUncheckedUpdateWithoutSubcategoriasInput>
    create: XOR<produtosCreateWithoutSubcategoriasInput, produtosUncheckedCreateWithoutSubcategoriasInput>
  }

  export type produtosUpdateWithWhereUniqueWithoutSubcategoriasInput = {
    where: produtosWhereUniqueInput
    data: XOR<produtosUpdateWithoutSubcategoriasInput, produtosUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type produtosUpdateManyWithWhereWithoutSubcategoriasInput = {
    where: produtosScalarWhereInput
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyWithoutSubcategoriasInput>
  }

  export type categoriasUpsertWithoutSubcategoriasInput = {
    update: XOR<categoriasUpdateWithoutSubcategoriasInput, categoriasUncheckedUpdateWithoutSubcategoriasInput>
    create: XOR<categoriasCreateWithoutSubcategoriasInput, categoriasUncheckedCreateWithoutSubcategoriasInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutSubcategoriasInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutSubcategoriasInput, categoriasUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type categoriasUpdateWithoutSubcategoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type produtosCreateManyCategoriasInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    subcategoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
  }

  export type subcategoriasCreateManyCategoriasInput = {
    id?: number
    nome: string
    descricao?: string | null
    codigo?: string | null
  }

  export type produtosUpdateWithoutCategoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUpdateManyWithoutProdutosNestedInput
    subcategorias?: subcategoriasUpdateOneWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUncheckedUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcategoriasUpdateWithoutCategoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUpdateManyWithoutSubcategoriasNestedInput
  }

  export type subcategoriasUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: produtosUncheckedUpdateManyWithoutSubcategoriasNestedInput
  }

  export type subcategoriasUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type movimentacoesCreateManyProdutosInput = {
    id?: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type posicoes_estoqueCreateManyProdutosInput = {
    id?: number
    endereco: string
    status?: string | null
    lote_id?: number | null
    quantidade?: number | null
    ultima_movimentacao?: Date | string | null
    observacoes?: string | null
    capacidade_maxima?: number | null
    tipo_posicao?: string | null
  }

  export type movimentacoesUpdateWithoutProdutosInput = {
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
  }

  export type movimentacoesUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUncheckedUpdateManyWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type posicoes_estoqueUpdateWithoutProdutosInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes_movimentacoes_posicao_destino_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    movimentacoes_movimentacoes_posicao_origem_idToposicoes_estoque?: movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
  }

  export type posicoes_estoqueUncheckedUpdateManyWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    ultima_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_posicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_origem_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesCreateManyPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: number
    produto_id: number
    lote_id?: number | null
    posicao_destino_id?: number | null
    tipo?: string | null
    quantidade: number
    data_hora: Date | string
    responsavel_id?: number | null
    documento_id?: number | null
    motivo?: string | null
    observacoes?: string | null
    custo_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_origem_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_origem_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    posicoes_estoque_movimentacoes_posicao_destino_idToposicoes_estoque?: posicoes_estoqueUpdateOneWithoutMovimentacoes_movimentacoes_posicao_destino_idToposicoes_estoqueNestedInput
    produtos?: produtosUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type movimentacoesUncheckedUpdateWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type movimentacoesUncheckedUpdateManyWithoutPosicoes_estoque_movimentacoes_posicao_origem_idToposicoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    lote_id?: NullableIntFieldUpdateOperationsInput | number | null
    posicao_destino_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel_id?: NullableIntFieldUpdateOperationsInput | number | null
    documento_id?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtosCreateManySubcategoriasInput = {
    id?: number
    nome: string
    sku: string
    peso_unitario?: Decimal | DecimalJsLike | number | string | null
    volume?: Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: string | null
    descricao?: string | null
    codigo_barras?: string | null
    preco_custo?: Decimal | DecimalJsLike | number | string | null
    preco_venda?: Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: number | null
    estoque_maximo?: number | null
    ponto_reposicao?: number | null
    lead_time?: number | null
    status?: string | null
    unidade_medida?: string | null
    categoria_id?: number | null
    fornecedor_principal_id?: number | null
    data_cadastro?: Date | string | null
    imagem_url?: string | null
  }

  export type produtosUpdateWithoutSubcategoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUpdateManyWithoutProdutosNestedInput
    categorias?: categoriasUpdateOneWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    movimentacoes?: movimentacoesUncheckedUpdateManyWithoutProdutosNestedInput
    posicoes_estoque?: posicoes_estoqueUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateManyWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    peso_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    preco_custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_venda?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_minimo?: NullableIntFieldUpdateOperationsInput | number | null
    estoque_maximo?: NullableIntFieldUpdateOperationsInput | number | null
    ponto_reposicao?: NullableIntFieldUpdateOperationsInput | number | null
    lead_time?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    fornecedor_principal_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
  }



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
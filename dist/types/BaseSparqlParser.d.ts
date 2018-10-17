import { Parser, TokenType, IToken, IParserConfig, IRecognitionException } from 'chevrotain';
import { IStardogParser } from './types';
export declare class BaseSparqlParser extends Parser implements IStardogParser {
    private lexer;
    tokenize: (document: string) => IToken[];
    parse: (document: string) => {
        errors: IRecognitionException[];
        cst: any;
    };
    constructor(options: {
        input?: IToken[];
        config?: Partial<IParserConfig>;
    }, tokenVocab: TokenType[]);
    SparqlDoc: (idxInCallingRule?: number, ...args: any[]) => any;
    QueryUnit: (idxInCallingRule?: number, ...args: any[]) => any;
    Query: (idxInCallingRule?: number, ...args: any[]) => any;
    Constant: (idxInCallingRule?: number, ...args: any[]) => any;
    MaxLength: (idxInCallingRule?: number, ...args: any[]) => any;
    UpdateUnit: (idxInCallingRule?: number, ...args: any[]) => any;
    Prologue: (idxInCallingRule?: number, ...args: any[]) => any;
    BaseDecl: (idxInCallingRule?: number, ...args: any[]) => any;
    PrefixDecl: (idxInCallingRule?: number, ...args: any[]) => any;
    SelectQuery: (idxInCallingRule?: number, ...args: any[]) => any;
    SubSelect: (idxInCallingRule?: number, ...args: any[]) => any;
    SelectClause: (idxInCallingRule?: number, ...args: any[]) => any;
    ConstructQuery: (idxInCallingRule?: number, ...args: any[]) => any;
    DescribeQuery: (idxInCallingRule?: number, ...args: any[]) => any;
    AskQuery: (idxInCallingRule?: number, ...args: any[]) => any;
    DatasetClause: (idxInCallingRule?: number, ...args: any[]) => any;
    DefaultGraphClause: (idxInCallingRule?: number, ...args: any[]) => any;
    NamedGraphClause: (idxInCallingRule?: number, ...args: any[]) => any;
    SourceSelector: (idxInCallingRule?: number, ...args: any[]) => any;
    WhereClause: (idxInCallingRule?: number, ...args: any[]) => any;
    SolutionModifier: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupClause: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupCondition: (idxInCallingRule?: number, ...args: any[]) => any;
    HavingClause: (idxInCallingRule?: number, ...args: any[]) => any;
    HavingCondition: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderClause: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderCondition: (idxInCallingRule?: number, ...args: any[]) => any;
    LimitOffsetClause: (idxInCallingRule?: number, ...args: any[]) => any;
    OffsetClause: (idxInCallingRule?: number, ...args: any[]) => any;
    LimitClause: (idxInCallingRule?: number, ...args: any[]) => any;
    ValuesClause: (idxInCallingRule?: number, ...args: any[]) => any;
    Update: (idxInCallingRule?: number, ...args: any[]) => any;
    Update1: (idxInCallingRule?: number, ...args: any[]) => any;
    Load: (idxInCallingRule?: number, ...args: any[]) => any;
    Clear: (idxInCallingRule?: number, ...args: any[]) => any;
    Drop: (idxInCallingRule?: number, ...args: any[]) => any;
    Create: (idxInCallingRule?: number, ...args: any[]) => any;
    Add: (idxInCallingRule?: number, ...args: any[]) => any;
    Move: (idxInCallingRule?: number, ...args: any[]) => any;
    Copy: (idxInCallingRule?: number, ...args: any[]) => any;
    InsertData: (idxInCallingRule?: number, ...args: any[]) => any;
    DeleteData: (idxInCallingRule?: number, ...args: any[]) => any;
    DeleteWhere: (idxInCallingRule?: number, ...args: any[]) => any;
    Modify: (idxInCallingRule?: number, ...args: any[]) => any;
    DeleteClause: (idxInCallingRule?: number, ...args: any[]) => any;
    InsertClause: (idxInCallingRule?: number, ...args: any[]) => any;
    UsingClause: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphOrDefault: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphRef: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphRefAll: (idxInCallingRule?: number, ...args: any[]) => any;
    QuadPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    QuadData: (idxInCallingRule?: number, ...args: any[]) => any;
    Quads: (idxInCallingRule?: number, ...args: any[]) => any;
    QuadsNotTriples: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesTemplate: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupGraphPatternSub: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesBlock: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphPatternNotTriples: (idxInCallingRule?: number, ...args: any[]) => any;
    OptionalGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    ServiceGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    Bind: (idxInCallingRule?: number, ...args: any[]) => any;
    InlineData: (idxInCallingRule?: number, ...args: any[]) => any;
    DataBlock: (idxInCallingRule?: number, ...args: any[]) => any;
    InlineDataOneVar: (idxInCallingRule?: number, ...args: any[]) => any;
    InlineDataFull: (idxInCallingRule?: number, ...args: any[]) => any;
    DataBlockValue: (idxInCallingRule?: number, ...args: any[]) => any;
    MinusGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupOrUnionGraphPattern: (idxInCallingRule?: number, ...args: any[]) => any;
    Filter: (idxInCallingRule?: number, ...args: any[]) => any;
    Constraint: (idxInCallingRule?: number, ...args: any[]) => any;
    FunctionCall: (idxInCallingRule?: number, ...args: any[]) => any;
    ArgList: (idxInCallingRule?: number, ...args: any[]) => any;
    ExpressionList: (idxInCallingRule?: number, ...args: any[]) => any;
    ConstructTemplate: (idxInCallingRule?: number, ...args: any[]) => any;
    ConstructTriples: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesSameSubject: (idxInCallingRule?: number, ...args: any[]) => any;
    PropertyList: (idxInCallingRule?: number, ...args: any[]) => any;
    PropertyListNotEmpty: (idxInCallingRule?: number, ...args: any[]) => any;
    Verb: (idxInCallingRule?: number, ...args: any[]) => any;
    ObjectList: (idxInCallingRule?: number, ...args: any[]) => any;
    Object: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesSameSubjectPath: (idxInCallingRule?: number, ...args: any[]) => any;
    PropertyListPath: (idxInCallingRule?: number, ...args: any[]) => any;
    PropertyListPathNotEmpty: (idxInCallingRule?: number, ...args: any[]) => any;
    VerbPath: (idxInCallingRule?: number, ...args: any[]) => any;
    VerbSimple: (idxInCallingRule?: number, ...args: any[]) => any;
    ObjectListPath: (idxInCallingRule?: number, ...args: any[]) => any;
    ObjectPath: (idxInCallingRule?: number, ...args: any[]) => any;
    Path: (idxInCallingRule?: number, ...args: any[]) => any;
    PathAlternative: (idxInCallingRule?: number, ...args: any[]) => any;
    PathSequence: (idxInCallingRule?: number, ...args: any[]) => any;
    PathElt: (idxInCallingRule?: number, ...args: any[]) => any;
    PathEltOrInverse: (idxInCallingRule?: number, ...args: any[]) => any;
    PathMod: (idxInCallingRule?: number, ...args: any[]) => any;
    PathPrimary: (idxInCallingRule?: number, ...args: any[]) => any;
    PathNegatedPropertySet: (idxInCallingRule?: number, ...args: any[]) => any;
    PathOneInPropertySet: (idxInCallingRule?: number, ...args: any[]) => any;
    Integer: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesNode: (idxInCallingRule?: number, ...args: any[]) => any;
    BlankNodePropertyList: (idxInCallingRule?: number, ...args: any[]) => any;
    TriplesNodePath: (idxInCallingRule?: number, ...args: any[]) => any;
    BlankNodePropertyListPath: (idxInCallingRule?: number, ...args: any[]) => any;
    Collection: (idxInCallingRule?: number, ...args: any[]) => any;
    CollectionPath: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphNode: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphNodePath: (idxInCallingRule?: number, ...args: any[]) => any;
    VarOrTerm: (idxInCallingRule?: number, ...args: any[]) => any;
    VarOrIri: (idxInCallingRule?: number, ...args: any[]) => any;
    Var: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphTerm: (idxInCallingRule?: number, ...args: any[]) => any;
    Expression: (idxInCallingRule?: number, ...args: any[]) => any;
    ConditionalOrExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    ConditionalAndExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    ValueLogical: (idxInCallingRule?: number, ...args: any[]) => any;
    RelationalExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    NumericExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    AdditiveExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    MultiplicativeExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    UnaryExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    PrimaryExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    BrackettedExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STR: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_LANG: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_LANGMATCHERS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_DATATYPE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_BOUND: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_IRI: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_URI: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_BNODE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_RAND: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_ABS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_CEIL: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_FLOOR: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_ROUND: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_CONCAT: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRLEN: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_UCASE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_LCASE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_ENCODE_FOR_URI: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_CONTAINS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRSTARTS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRENDS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRBEFORE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRAFTER: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_YEAR: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_MONTH: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_DAY: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_HOURS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_MINUTES: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_SECONDS: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_TIMEZONE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_TZ: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_NOW: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_UUID: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRUUID: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_MD5: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_SHA1: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_SHA256: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_SHA384: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_SHA512: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_COALESCE: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_IF: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRLANG: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_STRDT: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_sameTerm: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_isIRI: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_isURI: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_isBlank: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_isLiteral: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall_isNumeric: (idxInCallingRule?: number, ...args: any[]) => any;
    BuiltInCall: (idxInCallingRule?: number, ...args: any[]) => any;
    RegexExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    SubstringExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    StrReplaceExpression: (idxInCallingRule?: number, ...args: any[]) => any;
    ExistsFunction: (idxInCallingRule?: number, ...args: any[]) => any;
    NotExistsFunction: (idxInCallingRule?: number, ...args: any[]) => any;
    Count: (idxInCallingRule?: number, ...args: any[]) => any;
    Sum: (idxInCallingRule?: number, ...args: any[]) => any;
    Min: (idxInCallingRule?: number, ...args: any[]) => any;
    Max: (idxInCallingRule?: number, ...args: any[]) => any;
    Avg: (idxInCallingRule?: number, ...args: any[]) => any;
    Sample: (idxInCallingRule?: number, ...args: any[]) => any;
    GroupConcat: (idxInCallingRule?: number, ...args: any[]) => any;
    Aggregate: (idxInCallingRule?: number, ...args: any[]) => any;
    iriOrFunction: (idxInCallingRule?: number, ...args: any[]) => any;
    RDFLiteral: (idxInCallingRule?: number, ...args: any[]) => any;
    NumericLiteral: (idxInCallingRule?: number, ...args: any[]) => any;
    NumericLiteralUnsigned: (idxInCallingRule?: number, ...args: any[]) => any;
    NumericLiteralPositive: (idxInCallingRule?: number, ...args: any[]) => any;
    NumericLiteralNegative: (idxInCallingRule?: number, ...args: any[]) => any;
    BooleanLiteral: (idxInCallingRule?: number, ...args: any[]) => any;
    String: (idxInCallingRule?: number, ...args: any[]) => any;
    iri: (idxInCallingRule?: number, ...args: any[]) => any;
    PrefixedName: (idxInCallingRule?: number, ...args: any[]) => any;
    BlankNode: (idxInCallingRule?: number, ...args: any[]) => any;
}

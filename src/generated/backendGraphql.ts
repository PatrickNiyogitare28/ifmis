import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** The Appointments entity */
export type Appointment = {
  __typename?: 'Appointment';
  AprovalStatus?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Id: Scalars['uuid'];
  Message: Scalars['String'];
  Status?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['String']>;
  Title: Scalars['String'];
  Type: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  User: User;
  UserId: Scalars['uuid'];
};

/** aggregated selection of "Appointment" */
export type Appointment_Aggregate = {
  __typename?: 'Appointment_aggregate';
  aggregate?: Maybe<Appointment_Aggregate_Fields>;
  nodes: Array<Appointment>;
};

/** aggregate fields of "Appointment" */
export type Appointment_Aggregate_Fields = {
  __typename?: 'Appointment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Appointment_Max_Fields>;
  min?: Maybe<Appointment_Min_Fields>;
};


/** aggregate fields of "Appointment" */
export type Appointment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Appointment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Appointment". All fields are combined with a logical 'AND'. */
export type Appointment_Bool_Exp = {
  AprovalStatus?: InputMaybe<String_Comparison_Exp>;
  CreatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Message?: InputMaybe<String_Comparison_Exp>;
  Status?: InputMaybe<String_Comparison_Exp>;
  Time?: InputMaybe<String_Comparison_Exp>;
  Title?: InputMaybe<String_Comparison_Exp>;
  Type?: InputMaybe<String_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  UserId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Appointment_Bool_Exp>>;
  _not?: InputMaybe<Appointment_Bool_Exp>;
  _or?: InputMaybe<Array<Appointment_Bool_Exp>>;
};

/** unique or primary key constraints on table "Appointment" */
export enum Appointment_Constraint {
  /** unique or primary key constraint on columns "Id" */
  AppointmentPkey = 'Appointment_pkey'
}

/** input type for inserting data into table "Appointment" */
export type Appointment_Insert_Input = {
  AprovalStatus?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  Time?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Appointment_Max_Fields = {
  __typename?: 'Appointment_max_fields';
  AprovalStatus?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Appointment_Min_Fields = {
  __typename?: 'Appointment_min_fields';
  AprovalStatus?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "Appointment" */
export type Appointment_Mutation_Response = {
  __typename?: 'Appointment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Appointment>;
};

/** on_conflict condition type for table "Appointment" */
export type Appointment_On_Conflict = {
  constraint: Appointment_Constraint;
  update_columns?: Array<Appointment_Update_Column>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};

/** Ordering options when selecting data from "Appointment". */
export type Appointment_Order_By = {
  AprovalStatus?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Message?: InputMaybe<Order_By>;
  Status?: InputMaybe<Order_By>;
  Time?: InputMaybe<Order_By>;
  Title?: InputMaybe<Order_By>;
  Type?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  User?: InputMaybe<User_Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Appointment */
export type Appointment_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "Appointment" */
export enum Appointment_Select_Column {
  /** column name */
  AprovalStatus = 'AprovalStatus',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Status = 'Status',
  /** column name */
  Time = 'Time',
  /** column name */
  Title = 'Title',
  /** column name */
  Type = 'Type',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UserId = 'UserId'
}

/** input type for updating data in table "Appointment" */
export type Appointment_Set_Input = {
  AprovalStatus?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  Time?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Appointment" */
export type Appointment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Appointment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Appointment_Stream_Cursor_Value_Input = {
  AprovalStatus?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  Time?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "Appointment" */
export enum Appointment_Update_Column {
  /** column name */
  AprovalStatus = 'AprovalStatus',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Status = 'Status',
  /** column name */
  Time = 'Time',
  /** column name */
  Title = 'Title',
  /** column name */
  Type = 'Type',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UserId = 'UserId'
}

export type Appointment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Appointment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Appointment_Bool_Exp;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** The messages entity */
export type Message = {
  __typename?: 'Message';
  CreatedAt: Scalars['timestamptz'];
  Id: Scalars['uuid'];
  Message: Scalars['String'];
  /** An array relationship */
  MessageReplies: Array<MessageReply>;
  /** An aggregate relationship */
  MessageReplies_aggregate: MessageReply_Aggregate;
  Status: Scalars['String'];
  Type: Scalars['String'];
  UpdatedAt: Scalars['timestamptz'];
  /** An object relationship */
  User: User;
  UserId: Scalars['uuid'];
};


/** The messages entity */
export type MessageMessageRepliesArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


/** The messages entity */
export type MessageMessageReplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};

/** The messages replies entity */
export type MessageReply = {
  __typename?: 'MessageReply';
  CreatedAt?: Maybe<Scalars['timestamp']>;
  Id: Scalars['uuid'];
  Message: Scalars['uuid'];
  Reply: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  User: Scalars['uuid'];
};

/** aggregated selection of "MessageReply" */
export type MessageReply_Aggregate = {
  __typename?: 'MessageReply_aggregate';
  aggregate?: Maybe<MessageReply_Aggregate_Fields>;
  nodes: Array<MessageReply>;
};

export type MessageReply_Aggregate_Bool_Exp = {
  count?: InputMaybe<MessageReply_Aggregate_Bool_Exp_Count>;
};

export type MessageReply_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<MessageReply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<MessageReply_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "MessageReply" */
export type MessageReply_Aggregate_Fields = {
  __typename?: 'MessageReply_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MessageReply_Max_Fields>;
  min?: Maybe<MessageReply_Min_Fields>;
};


/** aggregate fields of "MessageReply" */
export type MessageReply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MessageReply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MessageReply" */
export type MessageReply_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MessageReply_Max_Order_By>;
  min?: InputMaybe<MessageReply_Min_Order_By>;
};

/** input type for inserting array relation for remote table "MessageReply" */
export type MessageReply_Arr_Rel_Insert_Input = {
  data: Array<MessageReply_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<MessageReply_On_Conflict>;
};

/** Boolean expression to filter rows from the table "MessageReply". All fields are combined with a logical 'AND'. */
export type MessageReply_Bool_Exp = {
  CreatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Message?: InputMaybe<Uuid_Comparison_Exp>;
  Reply?: InputMaybe<String_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  User?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MessageReply_Bool_Exp>>;
  _not?: InputMaybe<MessageReply_Bool_Exp>;
  _or?: InputMaybe<Array<MessageReply_Bool_Exp>>;
};

/** unique or primary key constraints on table "MessageReply" */
export enum MessageReply_Constraint {
  /** unique or primary key constraint on columns "Id" */
  MessageReplyPkey = 'MessageReply_pkey'
}

/** input type for inserting data into table "MessageReply" */
export type MessageReply_Insert_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamp']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['uuid']>;
  Reply?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type MessageReply_Max_Fields = {
  __typename?: 'MessageReply_max_fields';
  CreatedAt?: Maybe<Scalars['timestamp']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['uuid']>;
  Reply?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  User?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "MessageReply" */
export type MessageReply_Max_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Message?: InputMaybe<Order_By>;
  Reply?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  User?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MessageReply_Min_Fields = {
  __typename?: 'MessageReply_min_fields';
  CreatedAt?: Maybe<Scalars['timestamp']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['uuid']>;
  Reply?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  User?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "MessageReply" */
export type MessageReply_Min_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Message?: InputMaybe<Order_By>;
  Reply?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  User?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "MessageReply" */
export type MessageReply_Mutation_Response = {
  __typename?: 'MessageReply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MessageReply>;
};

/** on_conflict condition type for table "MessageReply" */
export type MessageReply_On_Conflict = {
  constraint: MessageReply_Constraint;
  update_columns?: Array<MessageReply_Update_Column>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};

/** Ordering options when selecting data from "MessageReply". */
export type MessageReply_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Message?: InputMaybe<Order_By>;
  Reply?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  User?: InputMaybe<Order_By>;
};

/** primary key columns input for table: MessageReply */
export type MessageReply_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "MessageReply" */
export enum MessageReply_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Reply = 'Reply',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  User = 'User'
}

/** input type for updating data in table "MessageReply" */
export type MessageReply_Set_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamp']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['uuid']>;
  Reply?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "MessageReply" */
export type MessageReply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MessageReply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MessageReply_Stream_Cursor_Value_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamp']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['uuid']>;
  Reply?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "MessageReply" */
export enum MessageReply_Update_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Reply = 'Reply',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  User = 'User'
}

export type MessageReply_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MessageReply_Set_Input>;
  /** filter the rows which have to be updated */
  where: MessageReply_Bool_Exp;
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  CreatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Message?: InputMaybe<String_Comparison_Exp>;
  MessageReplies?: InputMaybe<MessageReply_Bool_Exp>;
  MessageReplies_aggregate?: InputMaybe<MessageReply_Aggregate_Bool_Exp>;
  Status?: InputMaybe<String_Comparison_Exp>;
  Type?: InputMaybe<String_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  UserId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "Id" */
  MessagePkey = 'Message_pkey'
}

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  MessageReplies?: InputMaybe<MessageReply_Arr_Rel_Insert_Input>;
  Status?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  Message?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "Message". */
export type Message_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Message?: InputMaybe<Order_By>;
  MessageReplies_aggregate?: InputMaybe<MessageReply_Aggregate_Order_By>;
  Status?: InputMaybe<Order_By>;
  Type?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  User?: InputMaybe<User_Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Message */
export type Message_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Status = 'Status',
  /** column name */
  Type = 'Type',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UserId = 'UserId'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Message?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  Message = 'Message',
  /** column name */
  Status = 'Status',
  /** column name */
  Type = 'Type',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  UserId = 'UserId'
}

export type Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** The user entity */
export type User = {
  __typename?: 'User';
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Email: Scalars['String'];
  FullName: Scalars['String'];
  Id: Scalars['uuid'];
  IsActive: Scalars['Boolean'];
  IsOrganization: Scalars['Boolean'];
  Password: Scalars['String'];
  Phone: Scalars['String'];
  Role: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  CreatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  Email?: InputMaybe<String_Comparison_Exp>;
  FullName?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  IsActive?: InputMaybe<Boolean_Comparison_Exp>;
  IsOrganization?: InputMaybe<Boolean_Comparison_Exp>;
  Password?: InputMaybe<String_Comparison_Exp>;
  Phone?: InputMaybe<String_Comparison_Exp>;
  Role?: InputMaybe<String_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "Email" */
  UserEmailKey = 'User_Email_key',
  /** unique or primary key constraint on columns "Id" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  IsOrganization?: InputMaybe<Scalars['Boolean']>;
  Password?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Email?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  Password?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  CreatedAt?: Maybe<Scalars['timestamptz']>;
  Email?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  Password?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FullName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  IsActive?: InputMaybe<Order_By>;
  IsOrganization?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  Phone?: InputMaybe<Order_By>;
  Role?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Id = 'Id',
  /** column name */
  IsActive = 'IsActive',
  /** column name */
  IsOrganization = 'IsOrganization',
  /** column name */
  Password = 'Password',
  /** column name */
  Phone = 'Phone',
  /** column name */
  Role = 'Role',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  IsOrganization?: InputMaybe<Scalars['Boolean']>;
  Password?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  CreatedAt?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FullName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  IsOrganization?: InputMaybe<Scalars['Boolean']>;
  Password?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Scalars['String']>;
  UpdatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  FullName = 'FullName',
  /** column name */
  Id = 'Id',
  /** column name */
  IsActive = 'IsActive',
  /** column name */
  IsOrganization = 'IsOrganization',
  /** column name */
  Password = 'Password',
  /** column name */
  Phone = 'Phone',
  /** column name */
  Role = 'Role',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Appointment" */
  delete_Appointment?: Maybe<Appointment_Mutation_Response>;
  /** delete single row from the table: "Appointment" */
  delete_Appointment_by_pk?: Maybe<Appointment>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete data from the table: "MessageReply" */
  delete_MessageReply?: Maybe<MessageReply_Mutation_Response>;
  /** delete single row from the table: "MessageReply" */
  delete_MessageReply_by_pk?: Maybe<MessageReply>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Appointment" */
  insert_Appointment?: Maybe<Appointment_Mutation_Response>;
  /** insert a single row into the table: "Appointment" */
  insert_Appointment_one?: Maybe<Appointment>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert data into the table: "MessageReply" */
  insert_MessageReply?: Maybe<MessageReply_Mutation_Response>;
  /** insert a single row into the table: "MessageReply" */
  insert_MessageReply_one?: Maybe<MessageReply>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Appointment" */
  update_Appointment?: Maybe<Appointment_Mutation_Response>;
  /** update single row of the table: "Appointment" */
  update_Appointment_by_pk?: Maybe<Appointment>;
  /** update multiples rows of table: "Appointment" */
  update_Appointment_many?: Maybe<Array<Maybe<Appointment_Mutation_Response>>>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update data of the table: "MessageReply" */
  update_MessageReply?: Maybe<MessageReply_Mutation_Response>;
  /** update single row of the table: "MessageReply" */
  update_MessageReply_by_pk?: Maybe<MessageReply>;
  /** update multiples rows of table: "MessageReply" */
  update_MessageReply_many?: Maybe<Array<Maybe<MessageReply_Mutation_Response>>>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "Message" */
  update_Message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AppointmentArgs = {
  where: Appointment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Appointment_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MessageReplyArgs = {
  where: MessageReply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MessageReply_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AppointmentArgs = {
  objects: Array<Appointment_Insert_Input>;
  on_conflict?: InputMaybe<Appointment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Appointment_OneArgs = {
  object: Appointment_Insert_Input;
  on_conflict?: InputMaybe<Appointment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageReplyArgs = {
  objects: Array<MessageReply_Insert_Input>;
  on_conflict?: InputMaybe<MessageReply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageReply_OneArgs = {
  object: MessageReply_Insert_Input;
  on_conflict?: InputMaybe<MessageReply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AppointmentArgs = {
  _set?: InputMaybe<Appointment_Set_Input>;
  where: Appointment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Appointment_By_PkArgs = {
  _set?: InputMaybe<Appointment_Set_Input>;
  pk_columns: Appointment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Appointment_ManyArgs = {
  updates: Array<Appointment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MessageReplyArgs = {
  _set?: InputMaybe<MessageReply_Set_Input>;
  where: MessageReply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MessageReply_By_PkArgs = {
  _set?: InputMaybe<MessageReply_Set_Input>;
  pk_columns: MessageReply_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageReply_ManyArgs = {
  updates: Array<MessageReply_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Appointment" */
  Appointment: Array<Appointment>;
  /** fetch aggregated fields from the table: "Appointment" */
  Appointment_aggregate: Appointment_Aggregate;
  /** fetch data from the table: "Appointment" using primary key columns */
  Appointment_by_pk?: Maybe<Appointment>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch data from the table: "MessageReply" */
  MessageReply: Array<MessageReply>;
  /** fetch aggregated fields from the table: "MessageReply" */
  MessageReply_aggregate: MessageReply_Aggregate;
  /** fetch data from the table: "MessageReply" using primary key columns */
  MessageReply_by_pk?: Maybe<MessageReply>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootAppointmentArgs = {
  distinct_on?: InputMaybe<Array<Appointment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Appointment_Order_By>>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};


export type Query_RootAppointment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Appointment_Order_By>>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};


export type Query_RootAppointment_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessageReplyArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


export type Query_RootMessageReply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


export type Query_RootMessageReply_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  Id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Appointment" */
  Appointment: Array<Appointment>;
  /** fetch aggregated fields from the table: "Appointment" */
  Appointment_aggregate: Appointment_Aggregate;
  /** fetch data from the table: "Appointment" using primary key columns */
  Appointment_by_pk?: Maybe<Appointment>;
  /** fetch data from the table in a streaming manner: "Appointment" */
  Appointment_stream: Array<Appointment>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch data from the table: "MessageReply" */
  MessageReply: Array<MessageReply>;
  /** fetch aggregated fields from the table: "MessageReply" */
  MessageReply_aggregate: MessageReply_Aggregate;
  /** fetch data from the table: "MessageReply" using primary key columns */
  MessageReply_by_pk?: Maybe<MessageReply>;
  /** fetch data from the table in a streaming manner: "MessageReply" */
  MessageReply_stream: Array<MessageReply>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "Message" */
  Message_stream: Array<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootAppointmentArgs = {
  distinct_on?: InputMaybe<Array<Appointment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Appointment_Order_By>>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};


export type Subscription_RootAppointment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Appointment_Order_By>>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};


export type Subscription_RootAppointment_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootAppointment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Appointment_Stream_Cursor_Input>>;
  where?: InputMaybe<Appointment_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessageReplyArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


export type Subscription_RootMessageReply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MessageReply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessageReply_Order_By>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


export type Subscription_RootMessageReply_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootMessageReply_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MessageReply_Stream_Cursor_Input>>;
  where?: InputMaybe<MessageReply_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddAppointmentMutationVariables = Exact<{
  Title?: InputMaybe<Scalars['String']>;
  Message?: InputMaybe<Scalars['String']>;
  Time?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['uuid']>;
  Type?: InputMaybe<Scalars['String']>;
}>;


export type AddAppointmentMutation = { __typename?: 'mutation_root', insert_Appointment_one?: { __typename?: 'Appointment', Id: any, Message: string, UserId: any, Type: string, Title: string, CreatedAt?: any | null } | null };

export type CreateMessageMutationVariables = Exact<{
  Type?: InputMaybe<Scalars['String']>;
  Message?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['uuid']>;
}>;


export type CreateMessageMutation = { __typename?: 'mutation_root', insert_Message_one?: { __typename?: 'Message', Id: any, Type: string, Message: string, UserId: any, Status: string } | null };

export type CreateUserMutationVariables = Exact<{
  FullName?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  IsOrganization?: InputMaybe<Scalars['Boolean']>;
  Role?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_User_one?: { __typename?: 'User', Id: any, FullName: string, Email: string, Phone: string, Role: string, IsOrganization: boolean, IsActive: boolean } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', Id: any, FullName: string, Email: string, Phone: string, Role: string, IsActive: boolean, IsOrganization: boolean, CreatedAt?: any | null, UpdatedAt?: any | null }> };

export type GetAppointmentsForAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppointmentsForAdminQuery = { __typename?: 'query_root', Appointment: Array<{ __typename?: 'Appointment', Id: any, Title: string, Message: string, Time?: string | null, Type: string, AprovalStatus?: string | null, Status?: string | null, UserId: any, User: { __typename?: 'User', Id: any, FullName: string, Email: string, Phone: string } }> };

export type GetAppointmentsForUserQueryVariables = Exact<{
  UserId?: InputMaybe<Scalars['uuid']>;
}>;


export type GetAppointmentsForUserQuery = { __typename?: 'query_root', Appointment: Array<{ __typename?: 'Appointment', Id: any, Title: string, Message: string, Type: string, Time?: string | null, AprovalStatus?: string | null, Status?: string | null, UserId: any, User: { __typename?: 'User', FullName: string } }> };

export type GetMessagesForAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesForAdminQuery = { __typename?: 'query_root', Message: Array<{ __typename?: 'Message', Id: any, Type: string, Message: string, CreatedAt: any, Status: string, User: { __typename?: 'User', FullName: string, Email: string, Phone: string }, MessageReplies: Array<{ __typename?: 'MessageReply', Id: any, Message: any, Reply: string }> }> };

export type GetMessagesForUserQueryVariables = Exact<{
  UserId?: InputMaybe<Scalars['uuid']>;
}>;


export type GetMessagesForUserQuery = { __typename?: 'query_root', Message: Array<{ __typename?: 'Message', Id: any, Type: string, Message: string, CreatedAt: any, Status: string, MessageReplies: Array<{ __typename?: 'MessageReply', Id: any, Message: any, Reply: string }> }> };

export type AddMessageReplyMutationVariables = Exact<{
  Reply?: InputMaybe<Scalars['String']>;
  MessageId: Scalars['uuid'];
  UserId?: InputMaybe<Scalars['uuid']>;
}>;


export type AddMessageReplyMutation = { __typename?: 'mutation_root', insert_MessageReply_one?: { __typename?: 'MessageReply', Id: any, Reply: string } | null, update_Message_by_pk?: { __typename?: 'Message', Id: any, Message: string } | null };

export type GetUserWithEmailQueryVariables = Exact<{
  Email?: InputMaybe<Scalars['String']>;
}>;


export type GetUserWithEmailQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', Id: any, Email: string }>, User_aggregate: { __typename?: 'User_aggregate', aggregate?: { __typename?: 'User_aggregate_fields', count: number } | null } };

export type GetUserForLoginQueryVariables = Exact<{
  Email?: InputMaybe<Scalars['String']>;
}>;


export type GetUserForLoginQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', Id: any, Email: string, FullName: string, Password: string, Phone: string, Role: string, IsOrganization: boolean, IsActive: boolean }>, User_aggregate: { __typename?: 'User_aggregate', aggregate?: { __typename?: 'User_aggregate_fields', count: number } | null } };

export type UpdateAppointmentStatusMutationVariables = Exact<{
  Id: Scalars['uuid'];
  Status?: InputMaybe<Scalars['String']>;
}>;


export type UpdateAppointmentStatusMutation = { __typename?: 'mutation_root', update_Appointment_by_pk?: { __typename?: 'Appointment', Id: any, Status?: string | null } | null };


export const AddAppointmentDocument = gql`
    mutation AddAppointment($Title: String, $Message: String, $Time: String, $UserId: uuid, $Type: String) {
  insert_Appointment_one(
    object: {Message: $Message, Title: $Title, Type: $Type, Time: $Time, UserId: $UserId}
  ) {
    Id
    Message
    UserId
    Type
    Title
    CreatedAt
  }
}
    `;
export const CreateMessageDocument = gql`
    mutation createMessage($Type: String, $Message: String, $UserId: uuid) {
  insert_Message_one(
    object: {Type: $Type, Message: $Message, Status: "NOT REPLIED", UserId: $UserId}
  ) {
    Id
    Type
    Message
    UserId
    Status
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($FullName: String, $Email: String, $Phone: String, $Password: String, $IsActive: Boolean, $IsOrganization: Boolean, $Role: String) {
  insert_User_one(
    object: {FullName: $FullName, Email: $Email, Phone: $Phone, Password: $Password, IsActive: $IsActive, IsOrganization: $IsOrganization, Role: $Role}
  ) {
    Id
    FullName
    Email
    Phone
    Role
    IsOrganization
    IsActive
  }
}
    `;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  User {
    Id
    FullName
    Email
    Phone
    Role
    IsActive
    IsOrganization
    CreatedAt
    UpdatedAt
  }
}
    `;
export const GetAppointmentsForAdminDocument = gql`
    query getAppointmentsForAdmin {
  Appointment {
    Id
    Title
    Message
    Time
    Type
    AprovalStatus
    Status
    UserId
    User {
      Id
      FullName
      Email
      Phone
    }
  }
}
    `;
export const GetAppointmentsForUserDocument = gql`
    query getAppointmentsForUser($UserId: uuid) {
  Appointment(where: {UserId: {_eq: $UserId}}) {
    Id
    Title
    Message
    Type
    Time
    AprovalStatus
    Status
    UserId
    User {
      FullName
    }
  }
}
    `;
export const GetMessagesForAdminDocument = gql`
    query getMessagesForAdmin {
  Message {
    Id
    Type
    Message
    CreatedAt
    Status
    User {
      FullName
      Email
      Phone
    }
    MessageReplies {
      Id
      Message
      Reply
    }
  }
}
    `;
export const GetMessagesForUserDocument = gql`
    query getMessagesForUser($UserId: uuid) {
  Message(where: {UserId: {_eq: $UserId}}) {
    Id
    Type
    Message
    CreatedAt
    Status
    MessageReplies {
      Id
      Message
      Reply
    }
  }
}
    `;
export const AddMessageReplyDocument = gql`
    mutation addMessageReply($Reply: String, $MessageId: uuid!, $UserId: uuid) {
  insert_MessageReply_one(
    object: {Reply: $Reply, Message: $MessageId, User: $UserId}
  ) {
    Id
    Reply
  }
  update_Message_by_pk(pk_columns: {Id: $MessageId}, _set: {Status: "REPLIED"}) {
    Id
    Message
  }
}
    `;
export const GetUserWithEmailDocument = gql`
    query getUserWithEmail($Email: String) {
  User(where: {Email: {_eq: $Email}}) {
    Id
    Email
  }
  User_aggregate(where: {Email: {_eq: $Email}}) {
    aggregate {
      count
    }
  }
}
    `;
export const GetUserForLoginDocument = gql`
    query getUserForLogin($Email: String) {
  User(where: {Email: {_eq: $Email}}) {
    Id
    Email
    FullName
    Password
    Phone
    Role
    IsOrganization
    IsActive
  }
  User_aggregate(where: {Email: {_eq: $Email}}) {
    aggregate {
      count
    }
  }
}
    `;
export const UpdateAppointmentStatusDocument = gql`
    mutation updateAppointmentStatus($Id: uuid!, $Status: String) {
  update_Appointment_by_pk(pk_columns: {Id: $Id}, _set: {Status: $Status}) {
    Id
    Status
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddAppointment(variables?: AddAppointmentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddAppointmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddAppointmentMutation>(AddAppointmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddAppointment', 'mutation');
    },
    createMessage(variables?: CreateMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMessageMutation>(CreateMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMessage', 'mutation');
    },
    createUser(variables?: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    getAllUsers(variables?: GetAllUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUsersQuery>(GetAllUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllUsers', 'query');
    },
    getAppointmentsForAdmin(variables?: GetAppointmentsForAdminQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAppointmentsForAdminQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAppointmentsForAdminQuery>(GetAppointmentsForAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAppointmentsForAdmin', 'query');
    },
    getAppointmentsForUser(variables?: GetAppointmentsForUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAppointmentsForUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAppointmentsForUserQuery>(GetAppointmentsForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAppointmentsForUser', 'query');
    },
    getMessagesForAdmin(variables?: GetMessagesForAdminQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMessagesForAdminQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesForAdminQuery>(GetMessagesForAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMessagesForAdmin', 'query');
    },
    getMessagesForUser(variables?: GetMessagesForUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMessagesForUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesForUserQuery>(GetMessagesForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMessagesForUser', 'query');
    },
    addMessageReply(variables: AddMessageReplyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddMessageReplyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddMessageReplyMutation>(AddMessageReplyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addMessageReply', 'mutation');
    },
    getUserWithEmail(variables?: GetUserWithEmailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserWithEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserWithEmailQuery>(GetUserWithEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserWithEmail', 'query');
    },
    getUserForLogin(variables?: GetUserForLoginQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserForLoginQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserForLoginQuery>(GetUserForLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserForLogin', 'query');
    },
    updateAppointmentStatus(variables: UpdateAppointmentStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateAppointmentStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAppointmentStatusMutation>(UpdateAppointmentStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAppointmentStatus', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
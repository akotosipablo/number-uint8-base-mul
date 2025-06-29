/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import mul = require( './index' );


// TESTS //

// The function returns a number...
{
	mul( 8, 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	mul( true, 5 ); // $ExpectError
	mul( false, 5 ); // $ExpectError
	mul( null, 5 ); // $ExpectError
	mul( undefined, 5 ); // $ExpectError
	mul( '5', 5 ); // $ExpectError
	mul( [], 5 ); // $ExpectError
	mul( {}, 5 ); // $ExpectError
	mul( ( x: number ): number => x, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	mul( 5, true ); // $ExpectError
	mul( 5, false ); // $ExpectError
	mul( 5, null ); // $ExpectError
	mul( 5, undefined ); // $ExpectError
	mul( 5, '5' ); // $ExpectError
	mul( 5, [] ); // $ExpectError
	mul( 5, {} ); // $ExpectError
	mul( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mul(); // $ExpectError
	mul( 5 ); // $ExpectError
	mul( 5, 5, 5 ); // $ExpectError
}

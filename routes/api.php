<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'Post'], function (){
    Route::get('posts', 'IndexController'); /* Main page with all posts */
    Route::get('posts/_id={id}', 'ReturnIdPostController'); /* Returns a post for a specific id */
    Route::get('posts/lastPage', 'LastPostController'); /* Returns the total number of post pages */
    Route::get('posts/_delete={del}', 'DeleteController'); /* Deletes posts by specific id */
    Route::get('posts/_restore={res}', 'RestoreController'); /* Returns a post from the trash if it has been deleted */
    Route::get('posts/trash', 'TrashController'); /* Returns a post from the trash */
    Route::get('posts/_create={title}&{body}&{image}', 'CreateController'); /* Accepts data to create a new post */
});

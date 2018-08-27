<?php

use App\DataType;
use App\Menu;
use Illuminate\Database\Seeder;

class DataTypeTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DataType::insert($this->types());
    }

    public function types()
    {
        return [
            [
                'title' => 'bigIncrements',
                'value' => 'bigIncrements'
            ],
            [
                'title' => 'bigInteger',
                'value' => 'bigInteger'
            ],
            [
                'title' => 'binary',
                'value' => 'binary'
            ],
            [
                'title' => 'boolean',
                'value' => 'boolean'
            ],
            [
                'title' => 'char',
                'value' => 'char'
            ],
            [
                'title' => 'date',
                'value' => 'date'
            ],
            [
                'title' => 'dateTime',
                'value' => 'dateTime'
            ],
            [
                'title' => 'dateTimeTz',
                'value' => 'dateTimeTz'
            ],
            [
                'title' => 'decimal',
                'value' => 'decimal'
            ],
            [
                'title' => 'double',
                'value' => 'double'
            ],
            [
                'title' => 'enum',
                'value' => 'enum'
            ],
            [
                'title' => 'float',
                'value' => 'float'
            ],
            [
                'title' => 'geometry',
                'value' => 'geometry'
            ],
            [
                'title' => 'geometryCollection',
                'value' => 'geometryCollection'
            ],
            [
                'title' => 'increments',
                'value' => 'increments'
            ],
            [
                'title' => 'integer',
                'value' => 'integer'
            ],
            [
                'title' => 'ipAddress',
                'value' => 'ipAddress'
            ],
            [
                'title' => 'json',
                'value' => 'json'
            ],
            [
                'title' => 'jsonb',
                'value' => 'jsonb'
            ],
            [
                'title' => 'lineString',
                'value' => 'lineString'
            ],
            [
                'title' => 'longText',
                'value' => 'longText'
            ],
            [
                'title' => 'macAddress',
                'value' => 'macAddress'
            ],
            [
                'title' => 'mediumIncrements',
                'value' => 'mediumIncrements'
            ],
            [
                'title' => 'mediumInteger',
                'value' => 'mediumInteger'
            ],
            [
                'title' => 'mediumText',
                'value' => 'mediumText'
            ],
            [
                'title' => 'morphs',
                'value' => 'morphs'
            ],
            [
                'title' => 'multiLineString',
                'value' => 'multiLineString'
            ],
            [
                'title' => 'multiPoint',
                'value' => 'multiPoint'
            ],
            [
                'title' => 'multiPolygon',
                'value' => 'multiPolygon'
            ],
            [
                'title' => 'nullableMorphs',
                'value' => 'nullableMorphs'
            ],
            [
                'title' => 'nullableTimestamps',
                'value' => 'nullableTimestamps'
            ],
            [
                'title' => 'point',
                'value' => 'point'
            ],
            [
                'title' => 'polygon',
                'value' => 'polygon'
            ],
            [
                'title' => 'rememberToken',
                'value' => 'rememberToken'
            ],
            [
                'title' => 'smallIncrements',
                'value' => 'smallIncrements'
            ],
            [
                'title' => 'smallInteger',
                'value' => 'smallInteger'
            ],
            [
                'title' => 'softDeletes',
                'value' => 'softDeletes'
            ],
            [
                'title' => 'softDeletesTz',
                'value' => 'softDeletesTz'
            ],
            [
                'title' => 'string',
                'value' => 'string'
            ],
            [
                'title' => 'text',
                'value' => 'text'
            ],
            [
                'title' => 'time',
                'value' => 'time'
            ],
            [
                'title' => 'timeTz',
                'value' => 'timeTz'
            ],
            [
                'title' => 'timestamp',
                'value' => 'timestamp'
            ],
            [
                'title' => 'timestampTz',
                'value' => 'timestampTz'
            ],
            [
                'title' => 'timestamps',
                'value' => 'timestamps'
            ],
            [
                'title' => 'timestampsTz',
                'value' => 'timestampsTz'
            ],
            [
                'title' => 'tinyIncrements',
                'value' => 'tinyIncrements'
            ],
            [
                'title' => 'tinyInteger',
                'value' => 'tinyInteger'
            ],
            [
                'title' => 'unsignedBigInteger',
                'value' => 'unsignedBigInteger'
            ],
            [
                'title' => 'unsignedDecimal',
                'value' => 'unsignedDecimal'
            ],
            [
                'title' => 'unsignedInteger',
                'value' => 'unsignedInteger'
            ],
            [
                'title' => 'unsignedMediumInteger',
                'value' => 'unsignedMediumInteger'
            ],
            [
                'title' => 'unsignedSmallInteger',
                'value' => 'unsignedSmallInteger'
            ],
            [
                'title' => 'unsignedTinyInteger',
                'value' => 'unsignedTinyInteger'
            ],
            [
                'title' => 'uuid',
                'value' => 'uuid'
            ],
            [
                'title' => 'year',
                'value' => 'year'
            ]
        ];
    }
}



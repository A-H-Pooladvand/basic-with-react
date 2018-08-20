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
                'title' => 'bigIncrements'
            ],
            [
                'title' => 'bigInteger'
            ],
            [
                'title' => 'binary'
            ],
            [
                'title' => 'boolean'
            ],
            [
                'title' => 'char'
            ],
            [
                'title' => 'date'
            ],
            [
                'title' => 'dateTime'
            ],
            [
                'title' => 'dateTimeTz'
            ],
            [
                'title' => 'decimal'
            ],
            [
                'title' => 'double'
            ],
            [
                'title' => 'enum'
            ],
            [
                'title' => 'float'
            ],
            [
                'title' => 'geometry'
            ],
            [
                'title' => 'geometryCollection'
            ],
            [
                'title' => 'increments'
            ],
            [
                'title' => 'integer'
            ],
            [
                'title' => 'ipAddress'
            ],
            [
                'title' => 'json'
            ],
            [
                'title' => 'jsonb'
            ],
            [
                'title' => 'lineString'
            ],
            [
                'title' => 'longText'
            ],
            [
                'title' => 'macAddress'
            ],
            [
                'title' => 'mediumIncrements'
            ],
            [
                'title' => 'mediumInteger'
            ],
            [
                'title' => 'mediumText'
            ],
            [
                'title' => 'morphs'
            ],
            [
                'title' => 'multiLineString'
            ],
            [
                'title' => 'multiPoint'
            ],
            [
                'title' => 'multiPolygon'
            ],
            [
                'title' => 'nullableMorphs'
            ],
            [
                'title' => 'nullableTimestamps'
            ],
            [
                'title' => 'point'
            ],
            [
                'title' => 'polygon'
            ],
            [
                'title' => 'rememberToken'
            ],
            [
                'title' => 'smallIncrements'
            ],
            [
                'title' => 'smallInteger'
            ],
            [
                'title' => 'softDeletes'
            ],
            [
                'title' => 'softDeletesTz'
            ],
            [
                'title' => 'string'
            ],
            [
                'title' => 'text'
            ],
            [
                'title' => 'time'
            ],
            [
                'title' => 'timeTz'
            ],
            [
                'title' => 'timestamp'
            ],
            [
                'title' => 'timestampTz'
            ],
            [
                'title' => 'timestamps'
            ],
            [
                'title' => 'timestampsTz'
            ],
            [
                'title' => 'tinyIncrements'
            ],
            [
                'title' => 'tinyInteger'
            ],
            [
                'title' => 'unsignedBigInteger'
            ],
            [
                'title' => 'unsignedDecimal'
            ],
            [
                'title' => 'unsignedInteger'
            ],
            [
                'title' => 'unsignedMediumInteger'
            ],
            [
                'title' => 'unsignedSmallInteger'
            ],
            [
                'title' => 'unsignedTinyInteger'
            ],
            [
                'title' => 'uuid'
            ],
            [
                'title' => 'year'
            ]
        ];
    }
}



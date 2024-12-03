import { ArrayNotEmpty, IsArray, IsNumber } from "class-validator";

export class SumRequestValidator {
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  numbers: number[];
}
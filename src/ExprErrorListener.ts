/**
 * Author : lingdao.lzq
 * Created On : Fri Nov 17 2017
 * File : ExprErrorListener.ts
 */

import { ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';

export default class ExprErrorListener implements ANTLRErrorListener<any> {
  private errors: string[] = [];

  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException,
  ): void {
    this.errors.push(`[${line}:${charPositionInLine}] ${msg}`);
  }

  hasError() {
    return this.errors.length > 0;
  }

  print() {
    return this.errors.join('\n');
  }
}

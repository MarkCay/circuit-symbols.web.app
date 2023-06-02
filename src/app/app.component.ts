import { Component, ViewChild } from '@angular/core'
import constants, { SymbolCategory } from '../config/constants'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('swalItem')
  public readonly swalItem!: SwalComponent
  title = 'circuit-symbols'

  selectedData: any = null

  eSymbols: SymbolCategory[] = JSON.parse(JSON.stringify(constants.eSymbols))
  eSymbolsDisplay: SymbolCategory[] = JSON.parse(
    JSON.stringify(constants.eSymbols),
  )

  selectedCategory = ''

  q = ''

  dataLength = 0

  openSymbol(symbol: any, category: any) {
    this.selectedData = { symbol, category }
    this.swalItem.fire()
  }

  selectCategory(category: any, reset = true) {
    if (!reset) {
      this.showCategories = false
    }
    if (reset && category == this.selectedCategory) {
      category = ''
    }
    this.selectedCategory = category
    this.eSymbolsDisplay = JSON.parse(JSON.stringify(constants.eSymbols))

    if (this.selectedCategory !== '') {
      this.eSymbolsDisplay = this.eSymbolsDisplay.filter(
        (item) => item.category == category,
      )
    }

    this.dataLength = 0
    this.eSymbolsDisplay = this.eSymbolsDisplay.map((cat) => {
      cat.data = cat.data.filter((symbol) =>
        symbol.symbolName.toLowerCase().includes(this.q.toLowerCase()),
      )
      this.dataLength += cat.data.length
      return cat
    })

    const element = document.querySelector('#categories')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    return this.eSymbolsDisplay
  }

  timeout = 0

  onSearch() {
    window.clearTimeout(this.timeout)

    this.timeout = window.setTimeout(() => {
      this.selectCategory(this.selectedCategory, false)
    }, 500)
  }

  showCategories = true

  toggleShowCategories() {
    this.showCategories = !this.showCategories
  }
}

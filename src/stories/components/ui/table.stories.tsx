import { Checkbox, CheckboxCase } from '@/components/ui/checkbox';
import { SkeletonProvider } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableColumnFilterIcon,
  TableColumnSortAscIcon,
  TableColumnSortIcon,
  TableFooter,
  TableHeader,
  TableTd,
  TableTh,
  TableThActions,
  TableThButton,
  TableThContent,
  TableTr,
} from '@/components/ui/table';
import { TypographySpan } from '@/components/ui/typography';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    border: {
      control: { type: 'select' },
      options: ['none', 'horizontal', 'vertical', 'grid'],
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

type InvoiceRecord = {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: string;
};

function generateDummyData(numRecords: number): InvoiceRecord[] {
  const paymentStatuses = ['Paid', 'Pending', 'Failed'];
  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];

  const records: InvoiceRecord[] = [];

  for (let i = 1; i <= numRecords; i++) {
    const record: InvoiceRecord = {
      invoice: `INV-${i.toString().padStart(4, '0')}`,
      paymentStatus:
        paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
      totalAmount: parseFloat((Math.random() * 1000).toFixed(2)), // Random amount between 0 and 1000
      paymentMethod:
        paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
    };

    records.push(record);
  }

  return records;
}

export const _Story: Story = {
  args: {
    border: 'horizontal',
  },
  render: props => {
    const [invoices] = useState(generateDummyData(10));
    const totalAmount = invoices.reduce(
      (acc, curr) => acc + curr.totalAmount,
      0
    );

    const [selected, setSelected] = useState<Set<string>>(new Set());

    const onToggleSelection = (invoice: string) => {
      if (selected.has(invoice)) {
        selected.delete(invoice);
      } else {
        selected.add(invoice);
      }
      setSelected(new Set(selected));
    };

    return (
      <Table className="text-nowrap" style={{ minWidth: '500px' }} {...props}>
        <TableHeader>
          <TableTr>
            <TableTh>
              <CheckboxCase>
                <Checkbox
                  id="all"
                  checked={
                    selected.size == 0
                      ? false
                      : selected.size === invoices.length
                        ? true
                        : 'indeterminate'
                  }
                  onClick={() => {
                    if (selected.size === invoices.length) {
                      setSelected(new Set());
                    } else {
                      setSelected(new Set(invoices.map(it => it.invoice)));
                    }
                  }}
                />
              </CheckboxCase>
            </TableTh>
            <TableTh>
              <TableThContent>
                <span>Invoice</span>
                <TableThActions>
                  <TableThButton>
                    <SearchIcon />
                  </TableThButton>
                  <TableThButton>
                    <TableColumnSortAscIcon />
                  </TableThButton>
                </TableThActions>
              </TableThContent>
            </TableTh>
            <TableTh>
              <TableThContent>
                <span>Status</span>
                <TableThActions>
                  <TableThButton>
                    <TableColumnFilterIcon />
                  </TableThButton>
                  <TableThButton>
                    <TableColumnSortIcon />
                  </TableThButton>
                </TableThActions>
              </TableThContent>
            </TableTh>
            <TableTh>
              <TableThContent>
                <span>Method</span>
                <TableThActions>
                  <TableThButton>
                    <TableColumnFilterIcon />
                  </TableThButton>
                  <TableThButton>
                    <TableColumnSortIcon />
                  </TableThButton>
                </TableThActions>
              </TableThContent>
            </TableTh>
            <TableTh>
              <TableThContent className="justify-end">
                <span>Amount</span>
                <TableThActions>
                  <TableThButton>
                    <TableColumnSortIcon />
                  </TableThButton>
                </TableThActions>
              </TableThContent>
            </TableTh>
          </TableTr>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableTr
              key={invoice.invoice}
              selected={selected.has(invoice.invoice)}
            >
              <TableTd>
                <CheckboxCase>
                  <Checkbox
                    id={invoice.invoice}
                    checked={selected.has(invoice.invoice)}
                    onClick={() => {
                      onToggleSelection(invoice.invoice);
                    }}
                  />
                </CheckboxCase>
              </TableTd>
              <TableTd className="font-medium">{invoice.invoice}</TableTd>
              <TableTd>{invoice.paymentStatus}</TableTd>
              <TableTd>{invoice.paymentMethod}</TableTd>
              <TableTd className="text-right">
                {invoice.totalAmount.toFixed(2)}
              </TableTd>
            </TableTr>
          ))}
        </TableBody>
        <TableFooter>
          <TableTr>
            <TableTd />
            <TableTd colSpan={3}>Total</TableTd>
            <TableTd className="text-right">{totalAmount.toFixed(2)}</TableTd>
          </TableTr>
        </TableFooter>
        <TableCaption>A list of your recent invoices.</TableCaption>
      </Table>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StickyColumns: Story = {
  render: props => {
    const [invoices] = useState(generateDummyData(10));
    const totalAmount = invoices.reduce(
      (acc, curr) => acc + curr.totalAmount,
      0
    );

    const [selected, setSelected] = useState<Set<string>>(new Set());

    const onToggleSelection = (invoice: string) => {
      if (selected.has(invoice)) {
        selected.delete(invoice);
      } else {
        selected.add(invoice);
      }
      setSelected(new Set(selected));
    };

    return (
      <div style={{ width: '400px' }}>
        <Table className="text-nowrap" style={{ minWidth: '500px' }} {...props}>
          <TableHeader>
            <TableTr>
              <TableTh sticky="left">
                <CheckboxCase>
                  <Checkbox
                    id="all"
                    checked={
                      selected.size == 0
                        ? false
                        : selected.size === invoices.length
                          ? true
                          : 'indeterminate'
                    }
                    onClick={() => {
                      if (selected.size === invoices.length) {
                        setSelected(new Set());
                      } else {
                        setSelected(new Set(invoices.map(it => it.invoice)));
                      }
                    }}
                  />
                </CheckboxCase>
              </TableTh>
              <TableTh sticky="left">
                <TableThContent>
                  <span>Invoice</span>
                  <TableThActions>
                    <TableThButton>
                      <SearchIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortAscIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh>
                <TableThContent>
                  <span>Status</span>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnFilterIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh>
                <TableThContent>
                  <span>Method</span>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnFilterIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh sticky="right">
                <TableThContent className="justify-end">
                  <span>Amount</span>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
            </TableTr>
          </TableHeader>
          <TableBody>
            {invoices.map(invoice => (
              <TableTr
                key={invoice.invoice}
                selected={selected.has(invoice.invoice)}
              >
                <TableTd sticky="left">
                  <CheckboxCase>
                    <Checkbox
                      id={invoice.invoice}
                      checked={selected.has(invoice.invoice)}
                      onClick={() => {
                        onToggleSelection(invoice.invoice);
                      }}
                    />
                  </CheckboxCase>
                </TableTd>
                <TableTd sticky="left" className="font-medium">
                  {invoice.invoice}
                </TableTd>
                <TableTd>{invoice.paymentStatus}</TableTd>
                <TableTd>{invoice.paymentMethod}</TableTd>
                <TableTd sticky="right" className="text-right">
                  {invoice.totalAmount.toFixed(2)}
                </TableTd>
              </TableTr>
            ))}
          </TableBody>
          <TableFooter>
            <TableTr>
              <TableTd sticky="left" />
              <TableTd sticky="left">Total</TableTd>
              <TableTd />
              <TableTd />
              <TableTd sticky="right" className="text-right">
                {totalAmount.toFixed(2)}
              </TableTd>
            </TableTr>
          </TableFooter>
          <TableCaption>A list of your recent invoices.</TableCaption>
        </Table>
      </div>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _Skeleton: Story = {
  render: props => {
    const [invoices] = useState(generateDummyData(10));
    const totalAmount = invoices.reduce(
      (acc, curr) => acc + curr.totalAmount,
      0
    );

    const [selected, setSelected] = useState<Set<string>>(new Set());

    const onToggleSelection = (invoice: string) => {
      if (selected.has(invoice)) {
        selected.delete(invoice);
      } else {
        selected.add(invoice);
      }
      setSelected(new Set(selected));
    };

    return (
      <SkeletonProvider show>
        <Table className="text-nowrap" style={{ minWidth: '500px' }} {...props}>
          <TableHeader>
            <TableTr>
              <TableTh>
                <CheckboxCase>
                  <Checkbox
                    id="all"
                    checked={
                      selected.size == 0
                        ? false
                        : selected.size === invoices.length
                          ? true
                          : 'indeterminate'
                    }
                    onClick={() => {
                      if (selected.size === invoices.length) {
                        setSelected(new Set());
                      } else {
                        setSelected(new Set(invoices.map(it => it.invoice)));
                      }
                    }}
                  />
                </CheckboxCase>
              </TableTh>
              <TableTh>
                <TableThContent>
                  <TypographySpan>Invoice</TypographySpan>
                  <TableThActions>
                    <TableThButton>
                      <SearchIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortAscIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh>
                <TableThContent>
                  <TypographySpan>Status</TypographySpan>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnFilterIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh>
                <TableThContent>
                  <TypographySpan>Method</TypographySpan>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnFilterIcon />
                    </TableThButton>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
              <TableTh>
                <TableThContent className="justify-end">
                  <TypographySpan>Amount</TypographySpan>
                  <TableThActions>
                    <TableThButton>
                      <TableColumnSortIcon />
                    </TableThButton>
                  </TableThActions>
                </TableThContent>
              </TableTh>
            </TableTr>
          </TableHeader>
          <TableBody>
            {invoices.map(invoice => (
              <TableTr
                key={invoice.invoice}
                selected={selected.has(invoice.invoice)}
              >
                <TableTd>
                  <CheckboxCase>
                    <Checkbox
                      id={invoice.invoice}
                      checked={selected.has(invoice.invoice)}
                      onClick={() => {
                        onToggleSelection(invoice.invoice);
                      }}
                    />
                  </CheckboxCase>
                </TableTd>
                <TableTd className="font-medium">
                  <TypographySpan>{invoice.invoice}</TypographySpan>
                </TableTd>
                <TableTd>
                  <TypographySpan>{invoice.paymentStatus}</TypographySpan>
                </TableTd>
                <TableTd>
                  <TypographySpan>{invoice.paymentMethod}</TypographySpan>
                </TableTd>
                <TableTd className="text-right">
                  <TypographySpan>
                    {invoice.totalAmount.toFixed(2)}
                  </TypographySpan>
                </TableTd>
              </TableTr>
            ))}
          </TableBody>
          <TableFooter>
            <TableTr>
              <TableTd />
              <TableTd>
                <TypographySpan>Total</TypographySpan>
              </TableTd>
              <TableTd />
              <TableTd />
              <TableTd className="text-right">
                <TypographySpan>{totalAmount.toFixed(2)}</TypographySpan>
              </TableTd>
            </TableTr>
          </TableFooter>
          <TableCaption>
            <TypographySpan>A list of your recent invoices.</TypographySpan>
          </TableCaption>
        </Table>
      </SkeletonProvider>
    );
  },
};

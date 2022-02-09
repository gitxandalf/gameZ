"""empty message

Revision ID: cc126eef6fd5
Revises: 3c08d86c702d
Create Date: 2022-02-09 10:31:05.961529

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cc126eef6fd5'
down_revision = '3c08d86c702d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('quantity', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart_items', 'quantity')
    # ### end Alembic commands ###

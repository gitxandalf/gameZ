"""empty message

Revision ID: d57b1e8e7c8d
Revises: 14d687bf53bb
Create Date: 2022-02-09 15:03:19.831601

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd57b1e8e7c8d'
down_revision = '14d687bf53bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('created_at', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart_items', 'created_at')
    # ### end Alembic commands ###
